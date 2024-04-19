import { prisma } from "@/lib/prisma"

export async function GET() {
  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      createdAt: true,
      description: true,
      rate: true,
      book: {
        select: {
          name: true,
          author: true,
          coverUrl: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          avatarUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return Response.json({
    ratings,
  })
}
