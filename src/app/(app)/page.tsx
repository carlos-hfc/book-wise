"use client"

import Image from "next/image"
import Link from "next/link"
import { BuiltInProviderType } from "next-auth/providers/index"
import { signIn } from "next-auth/react"

import { AccessButton } from "@/components/access-button"

export default function App() {
  async function handleConnect(provider: BuiltInProviderType) {
    await signIn(provider)
  }

  return (
    <div className="flex h-dvh w-full items-center justify-between p-5">
      <div className="relative flex h-full w-full max-w-[600px] items-center justify-center overflow-hidden rounded-[10px] bg-[url('/bg-login.png')] bg-right bg-no-repeat before:absolute before:z-10 before:size-full before:bg-black/60 before:bg-[linear-gradient(0deg,rgba(42,40,121,0.6),rgba(42,40,121,0.6))] before:backdrop-blur-[1px]">
        <Image
          src="/logo-full.png"
          alt="BookWise Logo"
          width="256"
          height="50"
          className="z-20"
        />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div>
          <header className="mb-10">
            <h1 className="text-2xl font-bold leading-snug text-gray-100">
              Boas vindas!
            </h1>
            <p className="text-base leading-relaxed text-gray-200">
              Faça seu login ou acesse como visitante.
            </p>
          </header>

          <div className="space-y-4">
            <AccessButton
              access="google"
              onClick={() => handleConnect("google")}
            >
              Entrar com Google
            </AccessButton>

            <AccessButton
              access="github"
              onClick={() => handleConnect("github")}
            >
              Entrar com GitHub
            </AccessButton>

            <AccessButton
              as={Link}
              href="/home"
              access="rocket"
              prefetch={false}
            >
              Acessar como visitante
            </AccessButton>
          </div>
        </div>
      </div>
    </div>
  )
}
