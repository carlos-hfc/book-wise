import "@/styles/global.css"

import { Nunito } from "next/font/google"

import { cn } from "@/utils/cn"

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
      <body
        className={cn(
          nunito.className,
          "flex min-h-dvh bg-gray-800 antialiased",
        )}
      >
        {children}
      </body>
    </html>
  )
}
