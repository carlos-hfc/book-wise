import { Star } from "@phosphor-icons/react/dist/ssr"
import { ComponentProps } from "react"

import { RatingContainer } from "./styles"

interface RatingProps extends ComponentProps<typeof RatingContainer> {
  rating: number
}

export function Rating({ rating, ...props }: RatingProps) {
  return (
    <RatingContainer
      aria-label={`Avaliado em ${rating} de 5`}
      title={`Avaliado em ${rating} de 5`}
      {...props}
    >
      {Array.from({ length: 5 }, (_, i) => i + 1).map(star => (
        <Star
          key={star}
          weight={star <= rating ? "fill" : "regular"}
          aria-label={`Avaliação de ${star} estrela(s)`}
        />
      ))}
    </RatingContainer>
  )
}
