import Link from "next/link"

import { styled } from "@/styles"

export const SidebarBox = styled("div", {
  position: "relative",
  height: "100%",
  width: 260,
})

export const SidebarContainer = styled("aside", {
  position: "fixed",
  top: 20,
  left: 20,
  height: "calc(100vh - 40px)",
  backgroundImage: "url(/bg-sidebar.png)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: 12,
  maxWidth: 240,
  width: "100%",
  padding: "$10 0 $6",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "4rem",
})

export const SidebarNav = styled("nav", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "$4",
})

export const NavItem = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  padding: "$2 0",
  textDecoration: "none",
  color: "$gray-400",
  fontWeight: "$regular",
  fontSize: "$md",
  lineHeight: "$base",
  position: "relative",

  "&:hover": {
    color: "$gray-100",
  },

  svg: {
    width: "$6",
    height: "$6",
  },

  variants: {
    active: {
      true: {
        color: "$gray-100",
        fontWeight: "$bold",

        "&::before": {
          content: "",
          backgroundImage: "$gradient-vertical",
          position: "absolute",
          width: "$1",
          height: "$6",
          borderRadius: "$full",
          left: "-$4",
        },
      },
    },
  },
})
