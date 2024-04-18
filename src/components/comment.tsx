import { cn } from "@/utils/cn"

import { Avatar } from "./avatar"
import { Rating } from "./rating"

interface CommentProps {
  isMine?: boolean
}

export function Comment({ isMine = false }: CommentProps) {
  const mineS = isMine ? "bg-gray-600" : "bg-gray-700"

  return (
    <div className={cn("flex flex-col gap-5 rounded-lg p-6", mineS)}>
      <header className="flex items-start gap-4">
        <Avatar
          src="https://github.com/carlos-hfc.png"
          alt=""
        />

        <div className="flex-1">
          <h4 className="text-base font-bold leading-snug text-gray-100">
            Carlos Faustino
          </h4>
          <time className="text-sm leading-relaxed text-gray-400">
            Há 2 dias
          </time>
        </div>

        <Rating rating={4} />
      </header>

      <p className="text-sm leading-relaxed text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores
        harum ullam magni. Eveniet, sint distinctio cumque magnam recusandae sed
        quos, aperiam ratione consequuntur rem ea enim temporibus quasi sunt!
      </p>
    </div>
  )
}
