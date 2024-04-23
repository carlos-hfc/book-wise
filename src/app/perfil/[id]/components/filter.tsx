"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@/components/input"

const filterSchema = z.object({
  book: z.string().optional(),
})

type FilterSchema = z.infer<typeof filterSchema>

export function Filter() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const book = searchParams.get("book")

  const { register, handleSubmit } = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      book: book ?? "",
    },
  })

  function handleFilter(data: FilterSchema) {
    const urlParams = new URLSearchParams(searchParams.toString())

    if (data.book) {
      urlParams.set("book", data.book)
    } else {
      urlParams.delete("book")
    }

    router.replace(`${pathname}?${urlParams.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="mb-8"
    >
      <Input
        type="text"
        placeholder="Buscar livros avaliados"
        className="w-full"
        {...register("book")}
      />
    </form>
  )
}
