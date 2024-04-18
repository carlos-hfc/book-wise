import { NextRequest } from "next/server"

import { UrlParams } from "@/@types"
import { prisma } from "@/lib/prisma"

export async function GET(_: NextRequest, { params }: UrlParams<"id">) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!user)
    return Response.json({ message: "user nao encontrado" }, { status: 404 })

  return Response.json({ user })
}
