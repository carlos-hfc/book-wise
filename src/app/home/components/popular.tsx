import { Trending } from "@/components/trending"
import { POPULAR_BOOKS } from "@/constants/next-tags"

interface PopularResponse {
  books: {
    id: string
    name: string
    coverUrl: string
    author: string
    rate: number
    read: boolean
  }[]
}

export async function Popular() {
  const response = await fetch(`http://localhost:3000/api/popular`, {
    next: { tags: [POPULAR_BOOKS] },
    cache: "force-cache",
  })

  const { books } = (await response.json()) as PopularResponse

  return books.map(book => (
    <Trending
      key={book.id}
      {...book}
    />
  ))
}
