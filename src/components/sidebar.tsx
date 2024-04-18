"use client"

import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

import { Avatar } from "./avatar"
import { NavItem } from "./nav-item"

export function Sidebar() {
  const session = useSession()

  const router = useRouter()

  async function handleSignOut() {
    await signOut()

    router.replace("/")
  }

  return (
    <div className="relative h-full w-64">
      <aside className="fixed left-5 top-5 flex h-[calc(100vh_-_40px)] w-64 flex-col items-center justify-between gap-16 rounded-xl bg-[url('/bg-sidebar.png')] bg-cover bg-right-top bg-no-repeat pb-6 pt-10">
        <Image
          src="/logo-full.png"
          alt="BookWise Logo"
          width="134"
          height="26"
        />

        <nav className="flex flex-1 flex-col gap-4">
          <NavItem href="/home">
            <ChartLineUp />
            Início
          </NavItem>
          <NavItem href="/explorar">
            <Binoculars />
            Explorar
          </NavItem>
          {session.status === "authenticated" && (
            <NavItem href={`/perfil/${session.data.user.id}`}>
              <User />
              Perfil
            </NavItem>
          )}
        </nav>

        {session.status === "authenticated" ? (
          <div className="flex items-center gap-3">
            <Avatar
              src={session.data?.user.avatarUrl ?? ""}
              alt={session.data?.user.name ?? ""}
            />

            <span className="text-sm leading-relaxed text-gray-200">
              {session.data?.user.name}
            </span>

            <button
              className="flex size-7 items-center justify-center"
              onClick={handleSignOut}
            >
              <SignOut className="text-danger-light size-5" />
            </button>
          </div>
        ) : (
          <button className="flex items-center gap-3 rounded px-2 py-1 text-base font-bold leading-relaxed text-gray-200 hover:bg-gray-200/[.04]">
            Fazer login
            <SignIn className="size-5 text-green-100" />
          </button>
        )}
      </aside>
    </div>
  )
}
