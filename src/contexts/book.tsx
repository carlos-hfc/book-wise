"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  BookmarkSimple,
  BookOpen,
  Check,
  X,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { Avatar } from "@/components/avatar"
import { Comment } from "@/components/comment"
import { Modal } from "@/components/modal"
import { Rating } from "@/components/rating"

interface BookContextProps {
  open: boolean
  onOpenChange(id?: string): void
}

interface Book {
  id: string
  author: string
  name: string
  coverUrl: string
  totalPages: number
  rate: number
  categories: {
    category: {
      id: string
      name: string
    }
  }[]
  ratings: {
    id: string
    createdAt: string
    rate: number
    description: string
    user: {
      id: string
      name: string
      image: string
    }
  }[]
}

interface BookProviderProps extends PropsWithChildren {}

export const BookContext = createContext({} as BookContextProps)

export const useBook = () => useContext(BookContext)

const rateBookSchema = z.object({
  description: z.string().min(3).max(450),
  rate: z.number().min(1).max(5),
})

type RateBookSchema = z.infer<typeof rateBookSchema>

export function BookProvider({ children }: BookProviderProps) {
  const pathname = usePathname()

  const session = useSession()

  const [review, setReview] = useState(false)
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState({} as Book)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { control, register, handleSubmit, watch, reset } =
    useForm<RateBookSchema>({
      resolver: zodResolver(rateBookSchema),
      defaultValues: {
        description: "",
        rate: 0,
      },
    })

  useEffect(() => {
    setReview(false)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden", "pr-1.5")
    } else {
      document.documentElement.classList.remove("overflow-hidden", "pr-1.5")
    }
  }, [open])

  async function onOpenChange(id?: string) {
    if (!id) {
      reset()
      setReview(false)
      return setOpen(false)
    }

    const response = await fetch(`http://localhost:3000/api/books/${id}`)

    const data = (await response.json()) as { book: Book }

    setBook(data.book)
    setOpen(true)
  }

  async function handleEvaluate(data: RateBookSchema) {
    const response = await fetch(
      `http://localhost:3000/api/evaluate/${book.id}`,
      {
        method: "POST",
        body: JSON.stringify({
          rate: data.rate,
          description: data.description,
        }),
      },
    )

    if (response.status === 200) {
      setOpen(false)
      setReview(false)
      reset()
    }
  }

  function cancelEvaluate() {
    setReview(false)
    reset()
  }

  const description = watch("description")

  const alreadyEvaluated = useMemo(() => {
    return book.ratings?.some(
      rating => rating.user.id === session.data?.user.id,
    )
  }, [book.ratings, session.data?.user.id])

  function enableEvaluate() {
    if (session.status === "authenticated") {
      return setReview(true)
    }

    setIsOpenModal(true)
  }

  return (
    <BookContext.Provider value={{ open, onOpenChange }}>
      {children}

      {open &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => onOpenChange(undefined)}
            />

            <aside className="fixed right-0 flex h-full w-[650px] flex-col overflow-y-auto overflow-x-hidden bg-gray-800 px-12 pb-20 pt-6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:shadow-[inset_0_0_0_1px] [&::-webkit-scrollbar-thumb]:shadow-gray-700 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:rounded-full">
              <button
                onClick={() => onOpenChange(undefined)}
                className="mb-4 self-end"
              >
                <X className="size-6 text-gray-400" />
              </button>

              <div className="mb-10 flex flex-col gap-10 rounded-xl bg-gray-700 px-8 py-6">
                <div className="flex gap-8">
                  <div className="relative aspect-[172_/_242] h-[242px] w-[172px]">
                    <Image
                      src={book.coverUrl}
                      alt={book.name}
                      fill
                      className="rounded object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-lg font-bold leading-snug text-gray-100">
                      {book.name}
                    </h3>
                    <span className="mt-2 text-base leading-relaxed text-gray-300">
                      {book.author}
                    </span>

                    <Rating
                      rating={book.rate}
                      className="mt-auto"
                    />
                    <span className="mt-1 text-sm leading-relaxed text-gray-400">
                      {book.ratings?.length} avaliações
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
                        {book.categories
                          ?.map(({ category }) => category.name)
                          .join(", ")}
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
                        {book.totalPages}
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

                  {!alreadyEvaluated && (
                    <button
                      className="flex items-center rounded px-2 py-1 text-base font-bold leading-relaxed text-purple-100 no-underline hover:bg-purple-100/[.06]"
                      onClick={enableEvaluate}
                    >
                      Avaliar
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {session.status === "authenticated" && review && (
                    <form
                      className="flex flex-col gap-5 rounded-lg bg-gray-700 p-6"
                      onSubmit={handleSubmit(handleEvaluate)}
                    >
                      <header className="flex items-center gap-6">
                        <Avatar
                          src={session.data?.user.image ?? ""}
                          alt={session.data?.user.name ?? ""}
                          href={`/perfil/${session.data?.user.id}`}
                        />

                        <div className="flex-1">
                          <h4 className="text-base font-bold leading-snug text-gray-100">
                            {session.data?.user.name}
                          </h4>
                        </div>

                        <Controller
                          name="rate"
                          control={control}
                          render={({ field }) => (
                            <Rating
                              rating={field.value}
                              onClick={rate => field.onChange(rate)}
                              size="md"
                            />
                          )}
                        />
                      </header>

                      <div className="space-y-3">
                        <label className="relative cursor-auto">
                          <textarea
                            placeholder="Escreva sua avaliação"
                            className="peer h-40 w-full resize-none rounded border border-green-300 bg-gray-800 px-5 py-[.875rem] text-sm leading-relaxed text-gray-200 outline-none placeholder:text-gray-400 placeholder-shown:border-gray-500 focus:border-green-300"
                            maxLength={450}
                            {...register("description")}
                          />

                          <span className="absolute bottom-2 right-2 text-xs leading-relaxed text-gray-400">
                            {description?.length ?? 0}/450
                          </span>
                        </label>

                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            className="flex size-10 items-center justify-center rounded bg-gray-600"
                            onClick={cancelEvaluate}
                          >
                            <X className="size-6 text-purple-100" />
                          </button>
                          <button
                            type="submit"
                            className="flex size-10 items-center justify-center rounded bg-gray-600"
                          >
                            <Check className="size-6 text-green-100" />
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {book.ratings?.map(rating => (
                    <Comment
                      key={rating.id}
                      {...rating}
                      isMine={rating.user.id === session.data?.user.id}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </>,
          document.body,
        )}

      <Modal
        open={isOpenModal}
        onOpenChange={setIsOpenModal}
      />
    </BookContext.Provider>
  )
}
