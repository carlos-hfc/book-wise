import { NextRequest } from "next/server"

import { UrlParams } from "@/@types"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: UrlParams<"id">) {
  const book = request.nextUrl.searchParams.get("book") ?? ""

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!user) {
    return Response.json({ message: "user nao encontrado" }, { status: 404 })
  }

  const ratings = await prisma.rating.findMany({
    where: {
      userId: user.id,
      book: {
        name: {
          contains: book,
        },
      },
    },
    select: {
      id: true,
      description: true,
      rate: true,
      createdAt: true,
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          coverUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  const { _count: count, _sum: sum } = await prisma.book.aggregate({
    where: {
      ratings: {
        some: {
          userId: user.id,
        },
      },
    },
    _sum: {
      totalPages: true,
    },
    _count: {
      _all: true,
    },
  })

  const countCategory = await prisma.categoriesOnBooks.groupBy({
    by: ["categoryId"],
    where: {
      book: {
        ratings: {
          some: {
            userId: user.id,
          },
        },
      },
    },
    _count: {
      categoryId: true,
    },
    orderBy: {
      _count: {
        categoryId: "desc",
      },
    },
    take: 1,
  })

  let category: { name: string } | null = null

  if (countCategory.length > 0) {
    category = await prisma.category.findUnique({
      where: {
        id: countCategory[0].categoryId,
      },
      select: {
        name: true,
      },
    })
  }

  return Response.json({
    user,
    category: category?.name ?? undefined,
    books: count._all,
    pages: sum.totalPages ?? 0,
    ratings,
  })
}
