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
          id: true,
          name: true,
          author: true,
          coverUrl: true,
        },
      },
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
  })

  return Response.json({
    ratings,
  })
}
