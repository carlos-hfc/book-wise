import { Nunito } from "next/font/google"

import { getCssText } from "@/styles"
import { globalStyles } from "@/styles/global"

import { config } from "./metadata"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = config

globalStyles()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
