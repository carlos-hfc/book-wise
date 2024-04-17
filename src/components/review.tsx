import Image from "next/image"

import book from "@/images/Book.png"

import { Rating } from "./rating"

export function Review() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between gap-4">
        <Image
          src="https://github.com/carlos-hfc.png"
          alt=""
          width="40"
          height="40"
          className="size-10 rounded-full border border-transparent bg-gradient-vertical bg-clip-border"
        />

        <div className="flex-1">
          <h2 className="text-base leading-relaxed text-gray-200">
            Carlos Faustino
          </h2>
          <time className="text-sm leading-relaxed text-gray-400">Hoje</time>
        </div>

        <Rating rating={4} />
      </header>

      <div className="flex gap-5">
        <div className="relative aspect-[108_/_152] h-[152px] w-[108px]">
          <Image
            src={book}
            alt=""
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-bold leading-snug text-gray-100">
            O Hobbit
          </h3>
          <span className="text-sm leading-relaxed text-gray-400">
            J.R.R. Tolkien
          </span>

          <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quo voluptatum quidem ad
          </p>
        </div>
      </div>
    </div>
  )
}
