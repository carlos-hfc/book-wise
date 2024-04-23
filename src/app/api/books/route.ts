import { Prisma } from "@prisma/client"
import { NextRequest } from "next/server"

import { prisma } from "@/lib/prisma"

interface BooksResponse {
  id: string
  author: string
  name: string
  summary: string
  coverUrl: string
  totalPages: number
  createdAt: string
  rate: number
}

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") ?? ""
  const q = request.nextUrl.searchParams.get("q") ?? ""

  const books = await prisma.$queryRaw<BooksResponse[]>`
    SELECT
      b.*,
      ROUND(AVG(r.rate)) rate
    FROM books b
    JOIN ratings r ON r.bookId = b.id
    LEFT JOIN users u ON u.id = r.userId
    JOIN "CategoriesOnBooks" cb ON cb.bookId = b.id
    JOIN categories c ON c.id = cb.categoryId
    WHERE
      (b.name LIKE ${`%${q}%`} OR b.author LIKE ${`%${q}%`})
      ${tag && tag !== "all" ? Prisma.sql`AND c.name = ${tag}` : Prisma.empty}
    GROUP BY b.id
  `

  return Response.json({
    books,
  })
}
