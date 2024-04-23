import { Binoculars } from "@phosphor-icons/react/dist/ssr"
import { headers } from "next/headers"

import { Trending } from "@/components/trending"

import { Filter } from "./components/filter"
import { Tags } from "./components/tags"

interface TagsResponse {
  tags: {
    id: string
    name: string
  }[]
}

interface BooksResponse {
  books: {
    id: string
    author: string
    name: string
    summary: string
    coverUrl: string
    totalPages: number
    createdAt: string
    rate: number
  }[]
}

interface ExplorarProps {
  searchParams: {
    tag: string
    q: string
  }
}

export default async function Explorar({ searchParams }: ExplorarProps) {
  const urlParams = new URLSearchParams(searchParams)

  const [dataTags, dataBooks] = await Promise.all([
    fetch(`http://localhost:3000/api/tags`),
    fetch(`http://localhost:3000/api/books?${urlParams}`, {
      headers: headers(),
    }),
  ])

  const { tags } = (await dataTags.json()) as TagsResponse
  const { books } = (await dataBooks.json()) as BooksResponse

  return (
    <main className="flex-1 overflow-hidden px-24 py-18">
      <header className="flex items-start justify-between">
        <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
          <Binoculars className="size-8 text-green-100" />
          Explorar
        </h1>

        <Filter />
      </header>

      <Tags tags={tags} />

      <div className="grid grid-cols-3 gap-5">
        {books.map(book => (
          <Trending
            key={book.id}
            size="md"
            {...book}
          />
        ))}
      </div>
    </main>
  )
}
