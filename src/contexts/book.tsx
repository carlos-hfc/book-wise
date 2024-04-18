"use client"

import {
  BookmarkSimple,
  BookOpen,
  Check,
  X,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"
import { createPortal } from "react-dom"

import { Comment } from "@/components/comment"
import { Rating } from "@/components/rating"

interface BookContextProps {
  open: boolean
  onOpenChange(open: boolean): void
}

interface BookProviderProps extends PropsWithChildren {}

export const BookContext = createContext({} as BookContextProps)

export const useBook = () => useContext(BookContext)

export function BookProvider({ children }: BookProviderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden", "pr-1.5")
    } else {
      document.documentElement.classList.remove("overflow-hidden", "pr-1.5")
    }
  }, [open])

  function onOpenChange(open: boolean) {
    setOpen(open)
  }

  return (
    <BookContext.Provider value={{ open, onOpenChange }}>
      {children}

      {open &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => onOpenChange(false)}
            />

            <aside className="absolute right-0 flex h-full w-[650px] flex-col overflow-y-auto overflow-x-hidden bg-gray-800 px-12 pb-20 pt-6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:shadow-[inset_0_0_0_1px] [&::-webkit-scrollbar-thumb]:shadow-gray-700 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:rounded-full">
              <button
                onClick={() => onOpenChange(false)}
                className="mb-4 self-end"
              >
                <X className="size-6 text-gray-400" />
              </button>

              <div className="mb-10 flex flex-col gap-10 rounded-xl bg-gray-700 px-8 py-6">
                <div className="flex gap-8">
                  <div className="relative aspect-[172_/_242] h-[242px] w-[172px]">
                    <Image
                      src="/images/a-revolucao-dos-bixos.png"
                      alt=""
                      fill
                      className="rounded object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-lg font-bold leading-snug text-gray-100">
                      A revolução dos bichos
                    </h3>
                    <span className="mt-2 text-base leading-relaxed text-gray-300">
                      George Orwell
                    </span>

                    <Rating
                      rating={4}
                      className="mt-auto"
                    />
                    <span className="mt-1 text-sm leading-relaxed text-gray-400">
                      3 avaliações
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-14 border-t border-gray-600 pb-2 pt-6">
                  <div className="flex items-center gap-4 px-1">
                    <BookmarkSimple className="size-6 text-green-100" />

                    <div>
                      <span className="block text-sm leading-relaxed  text-gray-300">
                        Categoria
                      </span>
                      <span className="block text-base font-bold leading-snug text-gray-200">
                        Computação, educação
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-1">
                    <BookOpen className="size-6 text-green-100" />

                    <div>
                      <span className="block text-sm leading-relaxed  text-gray-300">
                        Páginas
                      </span>
                      <span className="block text-base font-bold leading-snug text-gray-200">
                        160
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm leading-relaxed text-gray-200">
                    Avaliações
                  </span>

                  <button className="flex items-center rounded px-2 py-1 text-base font-bold leading-relaxed text-purple-100 no-underline hover:bg-purple-100/[.06]">
                    Avaliar
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col gap-5 rounded-lg bg-gray-700 p-6">
                    <header className="flex items-center gap-6">
                      <Image
                        src="https://github.com/carlos-hfc.png"
                        alt=""
                        width="40"
                        height="40"
                        className="size-10 rounded-full border border-transparent bg-gradient-vertical bg-clip-border"
                      />

                      <div className="flex-1">
                        <h4 className="text-base font-bold leading-snug text-gray-100">
                          Carlos Faustino
                        </h4>
                      </div>

                      <Rating
                        rating={0}
                        size="md"
                      />
                    </header>

                    <form className="space-y-3">
                      <label className="relative cursor-auto">
                        <textarea
                          placeholder="Escreva sua avaliação"
                          className="peer h-40 w-full resize-none rounded border border-green-300 bg-gray-800 px-5 py-[.875rem] text-sm leading-relaxed text-gray-200 outline-none placeholder:text-gray-400 placeholder-shown:border-gray-500 focus:border-green-300"
                        />

                        <span className="absolute bottom-2 right-2 text-xs leading-relaxed text-gray-400">
                          0/450
                        </span>
                      </label>

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center rounded bg-gray-600"
                        >
                          <X className="size-6 text-purple-100" />
                        </button>
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center rounded bg-gray-600"
                        >
                          <Check className="size-6 text-green-100" />
                        </button>
                      </div>
                    </form>
                  </div>

                  <Comment isMine />
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
              </div>
            </aside>
          </>,
          document.body,
        )}
    </BookContext.Provider>
  )
}
