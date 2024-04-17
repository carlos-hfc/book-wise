import { User } from "@phosphor-icons/react/dist/ssr"

import { BookCard } from "@/components/book-card"
import { Input } from "@/components/input"
import { Profile } from "@/components/profile"

export default function Perfil() {
  return (
    <main className="flex-1 px-24 py-18">
      <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
        <User className="size-8 text-green-100" />
        Perfil
      </h1>

      <div className="mt-10 flex gap-16">
        <div className="w-4/6">
          <Input
            placeholder="Buscar livro avaliado"
            className="mb-8 w-full"
          />

          <div className="flex flex-col gap-6">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        <div className="relative w-2/6">
          <div className="fixed">
            <Profile />
          </div>
        </div>
      </div>
    </main>
  )
}
