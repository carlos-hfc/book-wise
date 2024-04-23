"use client"

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { ComponentProps } from "react"

import { useBook } from "@/contexts/book"
import { cn } from "@/utils/cn"

interface BookImageProps extends ComponentProps<typeof Image> {
  size?: "xl" | "lg" | "md" | "sm"
  bookId?: string
}

export function BookImage({ size = "lg", bookId, ...props }: BookImageProps) {
  const { onOpenChange } = useBook()

  let sizeS = ""
  let sizes = ""

  switch (size) {
    case "xl":
      sizeS = "aspect-[172_/_242] h-[242px] w-[172px]"
      sizes = "12vw"
      break
    case "md":
      sizeS = "aspect-[98_/_134] h-[134px] w-[98px]"
      sizes = "7.5vw"
      break
    case "sm":
      sizeS = "aspect-[64_/_94] h-[94px] w-[64px]"
      sizes = "5vw"
      break
    case "lg":
    default:
      sizeS = "aspect-[108_/_152] h-[152px] w-[108px]"
      break
  }

  return (
    <div
      className={cn("relative cursor-pointer", sizeS)}
      onClick={() => onOpenChange(bookId ?? "")}
    >
      <Image
        {...props}
        fill
        className="rounded object-cover"
        sizes={sizes}
      />
    </div>
  )
}
