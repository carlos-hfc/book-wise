import { Review } from "@/components/review"

interface RatingResponse {
  ratings: {
    id: string
    rate: number
    description: string
    createdAt: string
    book: {
      id: string
      author: string
      name: string
      coverUrl: string
    }
    user: {
      id: string
      name: string
      image: string | null
    }
  }[]
}

export async function Reviews() {
  const response = await fetch(`http://localhost:3000/api/ratings`)

  const { ratings } = (await response.json()) as RatingResponse

  return ratings.map(rating => (
    <Review
      key={rating.id}
      {...rating}
    />
  ))
}
