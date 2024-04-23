"use client"

import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { signOut } from "next-auth/react"

import { CustomUser } from "@/@types/next-auth"

import { Avatar } from "./avatar"

interface SidebarFooterProps {
  user?: CustomUser
}

export function SidebarFooter({ user }: SidebarFooterProps) {
  async function handleSignOut() {
    await signOut()
  }

  return user ? (
    <div className="flex items-center gap-3">
      <Avatar
        src={user.image ?? ""}
        alt={user.name ?? ""}
        as={Link}
        href={`/perfil/${user.id}`}
        prefetch={false}
      />

      <span className="text-sm leading-relaxed text-gray-200">{user.name}</span>

      <button
        className="flex size-7 items-center justify-center"
        onClick={handleSignOut}
      >
        <SignOut className="size-5 text-danger-light" />
      </button>
    </div>
  ) : (
    <button className="flex items-center gap-3 rounded px-2 py-1 text-base font-bold leading-relaxed text-gray-200 hover:bg-gray-200/[.04]">
      Fazer login
      <SignIn className="size-5 text-green-100" />
    </button>
  )
}
