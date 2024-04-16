import { Sidebar } from "@/components/Sidebar"

import { config } from "../metadata"

export const metadata = {
  ...config,
  title: "Explorar",
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
