import { Sidebar } from "@/components/sidebar"

import { config } from "../metadata"

export const metadata = {
  ...config,
  title: "Home",
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Sidebar />

      {children}
    </>
  )
}
