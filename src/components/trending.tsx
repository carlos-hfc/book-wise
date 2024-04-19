import { cn } from "@/utils/cn"

import { BookImage } from "./book-image"
import { Rating } from "./rating"

interface TrendingProps {
  size?: "md" | "sm"
  read?: boolean
  id: string
  name: string
  coverUrl: string
  author: string
  rate: number
}

export function Trending({ size = "sm", ...props }: TrendingProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative flex gap-5 overflow-hidden rounded-lg border-2 border-transparent bg-gray-700 px-5 py-4 hover:border-gray-600",
        props.read === true &&
          "before:absolute before:right-0 before:top-0 before:z-10 before:rounded-bl before:bg-green-300 before:px-2 before:py-1 before:text-xs before:font-bold before:uppercase before:leading-tight before:text-green-100 before:content-['LIDO']",
      )}
    >
      <BookImage
        src={props.coverUrl}
        alt={props.author}
        size={size}
        quality={25}
      />

      <div className="flex flex-col">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-gray-100">
          {props.name}
        </h3>
        <span className="text-sm leading-relaxed text-gray-400">
          {props.author}
        </span>

        <Rating
          rating={props.rate}
          className="mt-auto"
        />
      </div>
    </div>
  )
}
