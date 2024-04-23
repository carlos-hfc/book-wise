import { Trending } from "@/components/trending"

interface PopularResponse {
  books: {
    id: string
    name: string
    coverUrl: string
    author: string
    rate: number
  }[]
}

export async function Popular() {
  const response = await fetch(`http://localhost:3000/api/popular`)

  const { books } = (await response.json()) as PopularResponse

  return books.map(book => (
    <Trending
      key={book.id}
      {...book}
    />
  ))
}
