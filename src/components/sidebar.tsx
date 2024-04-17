import {
  Binoculars,
  ChartLineUp,
  SignIn,
  User,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

import { Action } from "./action"
import { NavItem } from "./nav-item"

export function Sidebar() {
  return (
    <div className="relative h-full w-64">
      <aside className="fixed left-5 top-5 flex h-[calc(100vh_-_40px)] w-64 flex-col items-center justify-between gap-16 rounded-xl bg-[url('/bg-sidebar.png')] bg-cover bg-center bg-no-repeat pb-6 pt-10">
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
          <NavItem href="/perfil">
            <User />
            Perfil
          </NavItem>
        </nav>

        <Action href="/">
          Fazer login
          <SignIn className="size-5 text-green-100" />
        </Action>
      </aside>
    </div>
  )
}
