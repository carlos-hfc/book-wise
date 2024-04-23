"use client"

import { X } from "@phosphor-icons/react/dist/ssr"
import * as Dialog from "@radix-ui/react-dialog"
import { BuiltInProviderType } from "next-auth/providers/index"
import { signIn } from "next-auth/react"
import React, { ComponentProps } from "react"

import { AccessButton } from "./access-button"

interface ModalProps extends ComponentProps<typeof Dialog.Root> {}

export function Modal(props: ModalProps) {
  async function handleConnect(provider: BuiltInProviderType) {
    await signIn(provider)
  }

  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-black/60" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-96 w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col gap-10 rounded-xl bg-gray-700 px-18 py-14 shadow-[4px_16px_24px] shadow-black/25">
          <Dialog.Close
            asChild
            className="absolute right-4 top-4 cursor-pointer"
          >
            <X className="size-6 text-gray-400" />
          </Dialog.Close>

          <Dialog.Title className="text-center text-base font-bold leading-snug text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.Title>

          <div className="flex-1 space-y-4 *:w-full">
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
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
