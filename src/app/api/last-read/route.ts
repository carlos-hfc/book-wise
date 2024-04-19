import { cookies } from "next/headers"

import { prisma } from "@/lib/prisma"

export async function GET() {
  const authCookie = cookies().get("next-auth.session-token")

  if (!authCookie?.value) {
    return Response.json({}, { status: 400 })
  }

  const user = await prisma.user.findFirst({
    where: {
      sessions: {
        some: {
          sessionToken: authCookie?.value,
        },
      },
    },
  })

  const rating = await prisma.rating.findFirst({
    where: {
      userId: user?.id,
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
      id: user?.id,
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
