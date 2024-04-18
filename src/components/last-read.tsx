import Image from "next/image"

import { Rating } from "./rating"

export function LastRead() {
  return (
    <div className="flex cursor-pointer gap-6 rounded-lg border-2 border-transparent bg-gray-600 px-6 py-5 hover:border-gray-500">
      <div className="relative aspect-[108_/_152] h-[152px] w-[108px]">
        <Image
          src="/images/a-revolucao-dos-bixos.png"
          alt=""
          fill
          className="rounded object-cover"
        />
      </div>

      <div className="flex flex-col">
        <header className="mb-3 flex justify-between">
          <time className="text-sm leading-relaxed text-gray-300">
            Há 2 dias
          </time>

          <Rating rating={4} />
        </header>

        <div>
          <h3 className="text-base font-bold leading-snug text-gray-100">
            A revolução dos bichos
          </h3>
          <span className="text-sm leading-relaxed text-gray-400">
            George Orwell
          </span>
        </div>

        <p className="mt-auto line-clamp-2 text-sm leading-relaxed text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          molestias reiciendis consequuntur mollitia aperiam accusantium!
          Praesentium quidem, distinctio itaque magnam inventore, dolore omnis
          iste cupiditate consectetur voluptate quia, quasi voluptatum.
        </p>
      </div>
    </div>
  )
}
