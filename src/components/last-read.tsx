import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { BookImage } from "./book-image"
import { Rating } from "./rating"

interface LastReadProps {
  id: string
  rate: number
  description: string
  createdAt: string
  coverUrl: string
  name: string
  author: string
}

export function LastRead(props: LastReadProps) {
  return (
    <div className="flex cursor-pointer gap-6 rounded-lg border-2 border-transparent bg-gray-600 px-6 py-5 hover:border-gray-500">
      <BookImage
        src={props.coverUrl}
        alt={props.name}
        bookId={props.id}
      />

      <div className="flex flex-1 flex-col">
        <header className="mb-3 flex justify-between">
          <time
            className="text-sm leading-relaxed text-gray-300"
            dateTime={props.createdAt}
            title={new Date(props.createdAt).toLocaleString()}
          >
            {formatDistanceToNow(props.createdAt, {
              addSuffix: true,
              locale: ptBR,
            })}
          </time>

          <Rating rating={props.rate} />
        </header>

        <div>
          <h3 className="text-base font-bold leading-snug text-gray-100">
            {props.name}
          </h3>
          <span className="text-sm leading-relaxed text-gray-400">
            {props.author}
          </span>
        </div>

        <p className="mt-auto line-clamp-2 text-sm leading-relaxed text-gray-300">
          {props.description}
        </p>
      </div>
    </div>
  )
}
