import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)

  const rating = await prisma.rating.findFirst({
    where: {
      userId: session?.user.id ?? "",
    },
    select: {
      rate: true,
      description: true,
      createdAt: true,
      book: {
        select: {
          id: true,
          coverUrl: true,
          name: true,
          author: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })
  if (!rating) return Response.json({}, { status: 404 })

  return Response.json({
    user: {
      id: session?.user.id,
    },
    lastRead: {
      id: rating.book.id,
      rate: rating.rate,
      description: rating.description,
      createdAt: rating.createdAt,
      coverUrl: rating.book.coverUrl,
      name: rating.book.name,
      author: rating.book.author,
    },
  })
}
