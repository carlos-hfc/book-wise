import { prisma } from "@/lib/prisma"

interface BookResponse {
  id: string
  name: string
  coverUrl: string
  author: string
  rate: number
}

export async function GET() {
  const books = await prisma.$queryRaw<BookResponse[]>`
    SELECT
      b.id id,
      b.name name,
      b.coverUrl coverUrl,
      b.author author,
      ROUND(AVG(r.rate)) rate
    FROM books b
    JOIN ratings r ON r.bookId = b.id
    LEFT JOIN users u ON u.id = r.userId
    GROUP BY b.id
    ORDER BY 
      COUNT(b.name) DESC,
      rate DESC
    LIMIT 5
  `

  return Response.json({
    books,
  })
}
