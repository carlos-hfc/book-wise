import { NextRequest } from "next/server"

import { UrlParams } from "@/@types"
import { prisma } from "@/lib/prisma"

export async function GET(_: NextRequest, { params }: UrlParams<"id">) {
  const book = await prisma.book.findUnique({
    where: {
      id: params.id,
    },
    select: {
      author: true,
      id: true,
      coverUrl: true,
      name: true,
      totalPages: true,
      categories: {
        select: {
          category: true,
        },
      },
      ratings: {
        select: {
          id: true,
          description: true,
          rate: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  })

  if (!book) return Response.json({}, { status: 404 })

  const rate = Math.round(
    book.ratings.reduce((acc, cur) => {
      acc += cur.rate

      return acc
    }, 0) / book.ratings.length,
  )

  return Response.json({
    book: {
      ...book,
      rate,
    },
  })
}
