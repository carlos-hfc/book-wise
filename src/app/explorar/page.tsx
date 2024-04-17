import { Binoculars } from "@phosphor-icons/react/dist/ssr"

import { Input } from "@/components/input"
import { Tag } from "@/components/tag"
import { Trending } from "@/components/trending"

export default function Explorar() {
  return (
    <main className="flex-1 px-24 py-18">
      <header className="flex items-start justify-between">
        <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
          <Binoculars className="size-8 text-green-100" />
          Explorar
        </h1>

        <Input placeholder="Buscar livro ou autor" />
      </header>

      <div className="mb-12 mt-10 flex items-center gap-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <Tag key={i}>Tudo</Tag>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <Trending
            key={i}
            size="md"
          />
        ))}
      </div>
    </main>
  )
}
