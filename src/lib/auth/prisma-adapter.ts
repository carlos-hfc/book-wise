import { NextApiRequest, NextApiResponse, NextPageContext } from "next"
import { Adapter } from "next-auth/adapters"

import { prisma } from "../prisma"

export function PrismaAdapter(
  request: NextApiRequest | NextPageContext["req"],
  response: NextApiResponse | NextPageContext["res"],
): Adapter {
  return {
    async createUser(user) {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name!,
        email: prismaUser.email,
        avatarUrl: prismaUser.avatarUrl!,
        emailVerified: null,
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) return null

      return {
        id: user.id,
        name: user.name!,
        email: user.email,
        avatarUrl: user.avatarUrl!,
        emailVerified: null,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) return null

      return {
        id: user.id,
        name: user.name!,
        email: user.email,
        avatarUrl: user.avatarUrl!,
        emailVerified: null,
      }
    },

    async getUserByAccount({ provider, providerAccountId }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) return null

      const { user } = account

      return {
        id: user.id,
        name: user.name!,
        email: user.email,
        avatarUrl: user.avatarUrl!,
        emailVerified: null,
      }
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name ?? undefined,
          email: user.email ?? undefined,
          avatarUrl: user.avatarUrl ?? undefined,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name!,
        email: prismaUser.email,
        avatarUrl: prismaUser.avatarUrl!,
        emailVerified: null,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          provider: account.provider,
          type: account.type,
          userId: account.userId,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refresh_token,
          accessToken: account.access_token,
          expiresAt: account.expires_at,
          tokenType: account.token_type,
          scope: account.scope,
          idToken: account.id_token,
          sessionState: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          sessionToken,
          userId,
          expires,
        },
      })

      return {
        sessionToken,
        userId,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const session = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!session) return null

      const { user } = session

      return {
        session: {
          expires: session.expires,
          sessionToken: session.sessionToken,
          userId: session.userId,
        },
        user: {
          id: user.id,
          name: user.name!,
          email: user.email,
          avatarUrl: user.avatarUrl!,
          emailVerified: null,
        },
      }
    },

    async updateSession({ sessionToken, expires, userId }) {
      const session = await prisma.session.update({
        where: {
          sessionToken,
        },
        data: {
          userId,
          expires,
        },
      })

      return {
        expires: session.expires,
        sessionToken: session.sessionToken,
        userId: session.userId,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken,
        },
      })
    },
  }
}
