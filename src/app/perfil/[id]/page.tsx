import { User } from "@phosphor-icons/react/dist/ssr"
import { notFound } from "next/navigation"

import { UrlParams } from "@/@types"
import { BookCard } from "@/components/book-card"
import { Profile } from "@/components/profile"

import { Filter } from "./components/filter"

interface PerfilProps extends UrlParams<"id"> {
  searchParams: {
    q: string
  }
}

interface ProfileResponse {
  user: {
    id: string
    name: string
    email: string
    image: string
    createdAt: string
  }
  books: number
  pages: number
  category?: string
  ratings: {
    id: string
    description: string
    rate: number
    createdAt: string
    book: {
      id: string
      name: string
      author: string
      coverUrl: string
    }
  }[]
}

export default async function Perfil({ params, searchParams }: PerfilProps) {
  const urlParams = new URLSearchParams(searchParams)

  const response = await fetch(
    `http://localhost:3000/api/perfil/${params.id}?${urlParams.toString()}`,
  )

  if (response.status !== 200) {
    notFound()
  }

  const { user, books, pages, category, ratings } =
    (await response.json()) as ProfileResponse

  return (
    <main className="flex-1 px-24 py-18">
      <h1 className="flex items-center gap-3 text-2xl leading-snug text-gray-100">
        <User className="size-8 text-green-100" />
        Perfil
      </h1>

      <div className="mt-10 flex gap-16">
        <div className="w-4/6">
          <Filter />

          <div className="flex flex-col gap-6">
            {ratings.map(rating => (
              <BookCard
                key={rating.id}
                {...rating}
              />
            ))}
          </div>
        </div>

        <div className="relative w-2/6">
          <div className="fixed">
            <Profile
              user={user}
              books={books}
              pages={pages}
              category={category}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
