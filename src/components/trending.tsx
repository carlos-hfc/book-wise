import { cn } from "@/utils/cn"

import { BookImage } from "./book-image"
import { Rating } from "./rating"

interface TrendingProps {
  size?: "md" | "sm"
  id: string
  name: string
  coverUrl: string
  author: string
  rate: number
}

export function Trending({
  size = "sm",
  id,
  name,
  coverUrl,
  author,
  rate,
}: TrendingProps) {
  return (
    <div
      className={cn(
        "relative flex gap-5 overflow-hidden rounded-lg border-2 border-transparent bg-gray-700 px-5 py-4 hover:border-gray-600",
      )}
    >
      <BookImage
        src={coverUrl}
        alt={author}
        size={size}
        quality={25}
        bookId={id}
      />

      <div className="flex flex-col">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-gray-100">
          {name}
        </h3>
        <span className="text-sm leading-relaxed text-gray-400">{author}</span>

        <Rating
          rating={rate}
          className="mt-auto"
        />
      </div>
    </div>
  )
}
