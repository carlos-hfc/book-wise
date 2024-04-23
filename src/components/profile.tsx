import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from "@phosphor-icons/react/dist/ssr"
import { format, parseISO } from "date-fns"

import { Avatar } from "./avatar"

interface ProfileProps {
  user: {
    id: string
    name: string
    email: string
    image: string
    createdAt: string
  }
  books: number
  pages: number
  category?: string
}

export function Profile({ user, books, pages, category }: ProfileProps) {
  return (
    <div className="flex flex-col items-center border-l border-gray-700 px-14">
      <div className="flex flex-col items-center pb-2">
        <Avatar
          src={user.image}
          alt={user.name}
          size="md"
        />

        <h2 className="mt-5 text-xl font-bold leading-snug text-gray-100">
          {user.name}
        </h2>
        <span className="text-sm lowercase text-gray-400">
          membro desde {format(parseISO(String(user.createdAt)), "yyyy")}
        </span>
      </div>

      <hr className="my-8 h-1 w-8 rounded-full bg-gradient-horizontal" />

      <ul className="space-y-10 py-5">
        <li className="flex items-center gap-5">
          <BookOpen className="size-8 text-green-100" />

          <div>
            <span className="block text-base leading-snug text-gray-200">
              {pages}
            </span>
            <span className="block text-sm leading-relaxed text-gray-300">
              Páginas lidas
            </span>
          </div>
        </li>

        <li className="flex items-center gap-5">
          <Books className="size-8 text-green-100" />

          <div>
            <span className="block text-base leading-snug text-gray-200">
              {books}
            </span>
            <span className="block text-sm leading-relaxed text-gray-300">
              Livros avaliados
            </span>
          </div>
        </li>

        <li className="flex items-center gap-5">
          <UserList className="size-8 text-green-100" />

          <div>
            <span className="block text-base leading-snug text-gray-200">
              {books}
            </span>
            <span className="block text-sm leading-relaxed text-gray-300">
              Autores lidos
            </span>
          </div>
        </li>

        {category && (
          <li className="flex items-center gap-5">
            <BookmarkSimple className="size-8 text-green-100" />

            <div>
              <span className="block text-base leading-snug text-gray-200">
                {category}
              </span>
              <span className="block text-sm leading-relaxed text-gray-300">
                Categoria mais lida
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
