import { cookies } from "next/headers"

import { prisma } from "@/lib/prisma"

interface BookResponse {
  id: string
  name: string
  coverUrl: string
  author: string
  rate: number
  read: string
}

export async function GET() {
  const authCookie = cookies().get("next-auth.session-token")

  const user = await prisma.user.findFirst({
    where: {
      sessions: {
        some: {
          sessionToken: authCookie?.value,
        },
      },
    },
  })

  const books = await prisma.$queryRaw<BookResponse[]>`
    SELECT
      b.id id,
      b.name name,
      b.coverUrl coverUrl,
      b.author author,
      r.rate rate,
      CASE 
        WHEN u.id = ${`${user?.id}`}
          THEN 'true' 
          ELSE 'false' 
        END AS read
    FROM books b
    JOIN ratings r ON r.bookId = b.id
    LEFT JOIN users u ON u.id = r.userId
    GROUP BY b.id
    ORDER BY 
      COUNT(b.name) DESC,
      r.rate DESC
    LIMIT 5
  `

  return Response.json({
    books: books.map(book => ({
      ...book,
      read: book.read === "true",
    })),
  })
}
