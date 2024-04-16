import Image from "next/image"

import book from "@/images/Book.png"

import { Rating } from "../Rating"
import {
  ReviewContainer,
  ReviewContent,
  ReviewContentBody,
  ReviewHeader,
  ReviewImage,
  ReviewUser,
} from "./styles"

export function Review() {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <Image
          src="https://github.com/carlos-hfc.png"
          alt=""
          width="40"
          height="40"
        />

        <ReviewUser>
          <h2>Carlos Faustino</h2>
          <time>Hoje</time>
        </ReviewUser>

        <Rating rating={4} />
      </ReviewHeader>

      <ReviewContent>
        <ReviewImage>
          <Image
            src={book}
            fill
            alt=""
          />
        </ReviewImage>

        <ReviewContentBody>
          <h3>O Hobbit</h3>
          <span>J.R.R. Tolkien</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quo voluptatum quidem ad
          </p>
        </ReviewContentBody>
      </ReviewContent>
    </ReviewContainer>
  )
}
