import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { UrlParams } from "@/@types"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

const rateBookSchema = z.object({
  description: z.string().min(3).max(450),
  rate: z.number().min(1).max(5),
})

export async function POST(request: Request, { params }: UrlParams<"id">) {
  const session = await getServerSession(authOptions)

  if (!session) return Response.json({}, { status: 400 })

  const body = await request.json()

  const { rate, description } = rateBookSchema.parse(body)

  const rating = await prisma.rating.create({
    data: {
      rate,
      description,
      bookId: params.id,
      userId: session.user.id,
    },
  })

  revalidatePath("/", "layout")

  return Response.json({
    rating,
  })
}
