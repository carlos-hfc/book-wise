import { prisma } from "@/lib/prisma"

export async function GET() {
  const tags = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  })

  return Response.json({
    tags,
  })
}
