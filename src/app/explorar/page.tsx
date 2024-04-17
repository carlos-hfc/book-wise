import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

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

        <label className="relative cursor-auto">
          <input
            className="peer w-[430px] rounded border border-green-300 bg-gray-800 py-[.875rem] pl-5 pr-12 text-gray-200 
            outline-none placeholder:text-gray-400 placeholder-shown:border-gray-500 focus:border-green-300"
            placeholder="Buscar livro ou autor"
          />
          <MagnifyingGlass className="absolute right-5 top-1/2 size-5 -translate-y-1/2 text-green-300 peer-placeholder-shown:text-gray-500 peer-focus-within:text-green-300" />
        </label>
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
