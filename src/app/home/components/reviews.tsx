import { Review } from "@/components/review"
import { LATEST_REVIEW } from "@/constants/next-tags"

interface RatingResponse {
  ratings: {
    id: string
    rate: number
    description: string
    createdAt: string
    book: {
      author: string
      name: string
      coverUrl: string
    }
    user: {
      id: string
      name: string
      avatarUrl: string | null
    }
  }[]
}

export async function Reviews() {
  const response = await fetch(`http://localhost:3000/api/ratings`, {
    next: { tags: [LATEST_REVIEW] },
    cache: "force-cache",
  })

  const { ratings } = (await response.json()) as RatingResponse

  return ratings.map(rating => (
    <Review
      key={rating.id}
      {...rating}
    />
  ))
}
