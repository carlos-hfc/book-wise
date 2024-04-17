import { CaretRight, ChartLineUp } from "@phosphor-icons/react/dist/ssr"

import { Action } from "@/components/action"
import { LastRead } from "@/components/last-read"
import { Review } from "@/components/review"
import { Trending } from "@/components/trending"

export default function Home() {
  return (
    <main className="flex-1 px-24 py-18">
      <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
        <ChartLineUp className="size-8 text-green-100" />
        Início
      </h1>

      <div className="mt-10 flex gap-16">
        <div className="w-4/6 space-y-3">
          <p className="mb-4 mt-0 flex items-center justify-between text-sm leading-relaxed text-gray-100">
            Sua última leitura
            <Action
              href="/"
              color="purple"
              size="sm"
            >
              Ver todos
              <CaretRight />
            </Action>
          </p>

          <LastRead />

          <p className="!mt-10 mb-4 flex items-center justify-between text-sm leading-relaxed text-gray-100">
            Avaliações mais recentes
          </p>

          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>

        <div className="w-2/6 space-y-3">
          <p className="mb-4 mt-0 flex items-center justify-between text-sm leading-relaxed text-gray-100">
            Livros populares
            <Action
              href="/"
              color="purple"
              size="sm"
            >
              Ver todos
              <CaretRight />
            </Action>
          </p>

          <Trending read />
          <Trending />
          <Trending />
          <Trending />
        </div>
      </div>
    </main>
  )
}
