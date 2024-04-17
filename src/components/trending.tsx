import Image from "next/image"

import book from "@/images/Book.png"
import { cn } from "@/utils/cn"

import { Rating } from "./rating"

interface TrendingProps {
  size?: "md" | "sm"
  read?: boolean
}

export function Trending({
  size = "sm",
  read = false,
  ...props
}: TrendingProps) {
  const sizeS =
    size === "sm"
      ? "aspect-[64_/_94] h-[94px] w-[64px]"
      : "aspect-[108_/_152] h-[152px] w-[108px]"

  const readS =
    read &&
    "before:absolute before:right-0 before:top-0 before:z-10 before:rounded-bl before:bg-green-300 before:px-2 before:py-1 before:text-xs before:font-bold before:uppercase before:leading-tight before:text-green-100 before:content-['LIDO']"

  return (
    <div
      {...props}
      className={cn(
        "relative flex cursor-pointer gap-5 overflow-hidden rounded-lg border-2 border-transparent bg-gray-700 px-5 py-4 hover:border-gray-600",
        readS,
      )}
    >
      <div className={cn("relative", sizeS)}>
        <Image
          src={book}
          alt=""
          fill
          className="rounded object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-gray-100">
          A revolução dos bichos
        </h3>
        <span className="text-sm leading-relaxed text-gray-400">
          George Orwell
        </span>

        <Rating
          rating={4}
          className="mt-auto"
        />
      </div>
    </div>
  )
}
