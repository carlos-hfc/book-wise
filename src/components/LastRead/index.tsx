import Image from "next/image"

import book from "@/images/Book.png"

import { Rating } from "../Rating"
import {
  LastReadContainer,
  LastReadContent,
  LastReadHeader,
  LastReadImage,
  LastReadInfo,
} from "./styles"

export function LastRead() {
  return (
    <LastReadContainer>
      <LastReadImage>
        <Image
          src={book}
          alt=""
          fill
        />
      </LastReadImage>

      <LastReadContent>
        <LastReadHeader>
          <time>Há 2 dias</time>
          <Rating rating={4} />
        </LastReadHeader>

        <LastReadInfo>
          <h3>Entendendo Algoritmos</h3>
          <span>Aditya Bhargava</span>
        </LastReadInfo>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique
          blanditiis quod reiciendis maxime doloribus quaerat tempore, atque
          minus ipsa ducimus sapiente cumque repellat nisi veniam nostrum
          eligendi voluptatibus reprehenderit.
        </p>
      </LastReadContent>
    </LastReadContainer>
  )
}
