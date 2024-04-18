import "@/styles/global.css"

import { Nunito } from "next/font/google"

import { BookProvider } from "@/contexts/book"
import { cn } from "@/utils/cn"

import { config } from "./metadata"

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" })

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
          nunito.variable,
          "flex min-h-dvh bg-gray-800 font-sans antialiased [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:shadow-[inset_0_0_0_1px] [&::-webkit-scrollbar-thumb]:shadow-gray-700 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:rounded-full",
        )}
      >
        <BookProvider>{children}</BookProvider>
      </body>
    </html>
  )
}
