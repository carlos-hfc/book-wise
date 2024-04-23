import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { cn } from "@/utils/cn"

import { Avatar } from "./avatar"
import { Rating } from "./rating"

interface CommentProps {
  isMine?: boolean
  id: string
  createdAt: string
  rate: number
  description: string
  user: {
    id: string
    name: string
    image: string
  }
}

export function Comment({ isMine = false, ...props }: CommentProps) {
  const mineS = isMine ? "bg-gray-600" : "bg-gray-700"

  return (
    <div className={cn("flex flex-col gap-5 rounded-lg p-6", mineS)}>
      <header className="flex items-start gap-4">
        <Avatar
          src={props.user.image}
          alt={props.user.name}
          href={`/perfil/${props.user.id}`}
        />

        <div className="flex-1">
          <h4 className="text-base font-bold leading-snug text-gray-100">
            {props.user.name}
          </h4>
          <time
            className="text-sm leading-relaxed text-gray-400"
            dateTime={props.createdAt}
            title={new Date(props.createdAt).toLocaleString()}
          >
            {formatDistanceToNow(props.createdAt, {
              addSuffix: true,
              locale: ptBR,
            })}
          </time>
        </div>

        <Rating rating={props.rate} />
      </header>

      <p className="text-sm leading-relaxed text-gray-300">
        {props.description}
      </p>
    </div>
  )
}
