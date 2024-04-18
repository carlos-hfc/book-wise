import Image from "next/image"

import { Rating } from "./rating"

export function BookCard() {
  return (
    <article>
      <time className="mb-2 block text-sm leading-relaxed text-gray-300">
        Há 2 dias
      </time>

      <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <div className="relative aspect-[98_/_134] h-[134px] w-[98px]">
            <Image
              src="/images/a-revolucao-dos-bixos.png"
              alt=""
              fill
              className="rounded object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold leading-snug text-gray-100">
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

        <p className="text-sm leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
          maiores provident sequi minima doloribus facilis inventore blanditiis
          eveniet quis quod veniam libero, eos omnis enim quidem iste neque
          perferendis adipisci? Recusandae exercitationem, voluptatem
          praesentium rerum officiis, sunt tempore modi saepe ipsa dolore
          laboriosam cupiditate? At reprehenderit consequuntur esse ut
          exercitationem minus voluptatum possimus distinctio sequi odit id,
          eveniet harum perferendis!
        </p>
      </div>
    </article>
  )
}
