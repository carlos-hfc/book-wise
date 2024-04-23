import { CaretRight, ChartLineUp } from "@phosphor-icons/react/dist/ssr"
import { headers } from "next/headers"

import { Action } from "@/components/action"
import { LastRead } from "@/components/last-read"
import { cn } from "@/utils/cn"

import { Popular } from "./components/popular"
import { Reviews } from "./components/reviews"

interface LastReadResponse {
  user?: {
    id: string
  }
  lastRead?: {
    id: string
    rate: number
    description: string
    createdAt: string
    coverUrl: string
    name: string
    author: string
  }
}

export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/last-read`, {
    headers: headers(),
  })

  const { lastRead, user } = (await response.json()) as LastReadResponse

  return (
    <main className="flex-1 px-24 py-18">
      <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
        <ChartLineUp className="size-8 text-green-100" />
        Início
      </h1>

      <div className="mt-10 flex gap-16">
        <div className="w-4/6 space-y-3">
          {lastRead && user && (
            <>
              <p className="mb-4 mt-0 flex items-center justify-between text-sm leading-relaxed text-gray-100">
                Sua última leitura
                <Action
                  href={`/perfil/${user.id}`}
                  color="purple"
                  size="sm"
                >
                  Ver todos
                  <CaretRight />
                </Action>
              </p>

              <LastRead {...lastRead} />
            </>
          )}

          <p
            className={cn(
              "mb-4 flex items-center justify-between text-sm leading-relaxed text-gray-100",
              lastRead && "!mt-10",
            )}
          >
            Avaliações mais recentes
          </p>

          <Reviews />
        </div>

        <div className="w-2/6 space-y-3">
          <p className="mb-4 mt-0 flex items-center justify-between text-sm leading-relaxed text-gray-100">
            Livros populares
            <Action
              href="/explorar"
              color="purple"
              size="sm"
            >
              Ver todos
              <CaretRight />
            </Action>
          </p>

          <Popular />
        </div>
      </div>
    </main>
  )
}
