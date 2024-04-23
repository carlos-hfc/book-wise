import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { BookImage } from "./book-image"
import { Rating } from "./rating"

interface BookCardProps {
  id: string
  description: string
  rate: number
  createdAt: string
  book: {
    id: string
    name: string
    author: string
    coverUrl: string
  }
}

export function BookCard(props: BookCardProps) {
  return (
    <article>
      <time
        className="mb-2 block text-sm leading-relaxed text-gray-300 first-letter:capitalize"
        dateTime={props.createdAt}
        title={new Date(props.createdAt).toLocaleString()}
      >
        {formatDistanceToNow(props.createdAt, {
          addSuffix: true,
          locale: ptBR,
        })}
      </time>

      <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <BookImage
            src={props.book.coverUrl}
            alt={props.book.name}
            bookId={props.book.id}
          />

          <div className="flex flex-col">
            <h3 className="text-lg font-bold leading-snug text-gray-100">
              {props.book.name}
            </h3>
            <span className="text-sm leading-relaxed text-gray-400">
              {props.book.author}
            </span>

            <Rating
              rating={props.rate}
              className="mt-auto"
            />
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-300">
          {props.description}
        </p>
      </div>
    </article>
  )
}
