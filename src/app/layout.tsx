import { Nunito } from "next/font/google"

import { config } from "./metadata"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = config

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
