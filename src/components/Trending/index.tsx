import Image from "next/image"

import book from "@/images/Book.png"

import { Rating } from "../Rating"
import { TrendingContainer, TrendingContent, TrendingImage } from "./styles"

export function Trending() {
  return (
    <TrendingContainer>
      <TrendingImage>
        <Image
          src={book}
          alt=""
          fill
        />
      </TrendingImage>

      <TrendingContent>
        <h3>A revolução dos bichos</h3>
        <span>George Orwell</span>

        <Rating rating={4} />
      </TrendingContent>
    </TrendingContainer>
  )
}
