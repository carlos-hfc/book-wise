import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

import { NavItem } from "./nav-item"
import { SidebarFooter } from "./sidebar-footer"

export async function Sidebar() {
  const session = await getServerSession(authOptions)

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
          {session?.user && (
            <NavItem href={`/perfil/${session.user.id}`}>
              <User />
              Perfil
            </NavItem>
          )}
        </nav>

        <SidebarFooter user={session?.user} />
      </aside>
    </div>
  )
}
