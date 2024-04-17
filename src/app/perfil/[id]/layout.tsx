import { config } from "@/app/metadata"
import { Sidebar } from "@/components/sidebar"

export const metadata = {
  ...config,
  title: "Perfil",
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
