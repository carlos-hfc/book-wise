import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import Link from "next/link"

import { Avatar } from "./avatar"
import { BookImage } from "./book-image"
import { Rating } from "./rating"

interface ReviewProps {
  id: string
  rate: number
  description: string
  createdAt: string
  book: {
    id: string
    author: string
    name: string
    coverUrl: string
  }
  user: {
    id: string
    name: string
    image: string | null
  }
}

export function Review(props: ReviewProps) {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between gap-4">
        <Avatar
          src={props.user.image ?? ""}
          alt={props.user.name}
          as={Link}
          href={`/perfil/${props.user.id}`}
          prefetch={false}
        />

        <div className="flex-1">
          <h2 className="text-base leading-relaxed text-gray-200">
            {props.user.name}
          </h2>
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

      <div className="flex gap-5">
        <BookImage
          src={props.book.coverUrl}
          alt={props.book.name}
          quality={50}
          bookId={props.book.id}
        />

        <div className="flex flex-col">
          <h3 className="text-sm font-bold leading-snug text-gray-100">
            {props.book.name}
          </h3>
          <span className="text-sm leading-relaxed text-gray-400">
            {props.book.author}
          </span>

          <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-gray-300">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}
