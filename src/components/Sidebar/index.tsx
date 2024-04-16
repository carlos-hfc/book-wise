import {
  Binoculars,
  ChartLineUp,
  SignIn,
  User,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

import { Action } from "../Action"
import { NavItem, SidebarBox, SidebarContainer, SidebarNav } from "./styles"

export function Sidebar() {
  return (
    <SidebarBox>
      <SidebarContainer>
        <Image
          src="/logo-full.png"
          alt="BookWise Logo"
          width="134"
          height="26"
        />
        <SidebarNav>
          <NavItem
            href="/"
            active
          >
            <ChartLineUp />
            Início
          </NavItem>
          <NavItem href="/">
            <Binoculars />
            Explorar
          </NavItem>
          <NavItem href="/">
            <User />
            Perfil
          </NavItem>
        </SidebarNav>
        <Action
          href="/"
          color="white"
        >
          Fazer login
          <SignIn color="#50B2C0" />
        </Action>
      </SidebarContainer>
    </SidebarBox>
  )
}
