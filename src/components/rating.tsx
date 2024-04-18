import { Star } from "@phosphor-icons/react/dist/ssr"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface RatingProps extends ComponentProps<"div"> {
  rating: number
  size?: "md" | "sm"
}

export function Rating({ rating, size = "sm", ...props }: RatingProps) {
  const sizeS = size === "sm" ? "size-4" : "size-7"

  return (
    <div
      {...props}
      aria-label={`Avaliado em ${rating} de 5`}
      title={`Avaliado em ${rating} de 5`}
      className={cn("flex space-x-1 *:text-purple-100", props.className)}
    >
      {Array.from({ length: 5 }, (_, i) => i + 1).map(star => (
        <Star
          key={star}
          className={sizeS}
          weight={star <= rating ? "fill" : "regular"}
          aria-label={`Avaliação de ${star} estrela(s)`}
        />
      ))}
    </div>
  )
}
