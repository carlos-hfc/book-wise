import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

export function Profile() {
  return (
    <div className="flex flex-col items-center border-l border-gray-700 px-14">
      <div className="flex flex-col items-center pb-2">
        <Image
          src="https://github.com/carlos-hfc.png"
          alt=""
          width="72"
          height="72"
          className="size-18 rounded-full border border-transparent bg-gradient-vertical bg-clip-border"
        />

        <h2 className="mt-5 text-xl font-bold leading-snug text-gray-100">
          Carlos Faustino
        </h2>
        <span className="text-sm lowercase text-gray-400">
          membro desde 2024
        </span>
      </div>

      <hr className="my-8 h-1 w-8 rounded-full bg-gradient-horizontal" />

      <ul className="space-y-10 py-5">
        <li className="flex items-center gap-5">
          <BookOpen className="size-8 text-green-100" />

          <div>
            <span className="block text-base leading-snug text-gray-200">
              3853
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
              10
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
              8
            </span>
            <span className="block text-sm leading-relaxed text-gray-300">
              Autores lidos
            </span>
          </div>
        </li>
        <li className="flex items-center gap-5">
          <BookmarkSimple className="size-8 text-green-100" />

          <div>
            <span className="block text-base leading-snug text-gray-200">
              Computação
            </span>
            <span className="block text-sm leading-relaxed text-gray-300">
              Categoria mais lida
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
