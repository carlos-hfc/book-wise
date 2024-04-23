"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@/components/input"

const filterSchema = z.object({
  query: z.string().optional(),
})

type FilterSchema = z.infer<typeof filterSchema>

export function Filter() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  const { register, handleSubmit } = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      query: q ?? "",
    },
  })

  function handleFilter(data: FilterSchema) {
    const urlParams = new URLSearchParams(searchParams.toString())

    if (data.query) {
      urlParams.set("q", data.query)
    } else {
      urlParams.delete("q")
    }

    router.replace(`${pathname}?${urlParams.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit(handleFilter)}>
      <Input
        type="text"
        placeholder="Buscar livro ou autor"
        {...register("query")}
      />
    </form>
  )
}
