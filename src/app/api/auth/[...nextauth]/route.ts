import { NextApiRequest, NextApiResponse, NextPageContext } from "next"
import NextAuth, { AuthOptions } from "next-auth"
import GitHubProvider, { GithubProfile } from "next-auth/providers/github"

import { PrismaAdapter } from "@/lib/auth/prisma-adapter"

export function buildNextAuthOptions(
  request: NextApiRequest | NextPageContext["req"],
  response: NextApiResponse | NextPageContext["res"],
): AuthOptions {
  return {
    adapter: PrismaAdapter(request, response),
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
        profile(profile: GithubProfile) {
          return {
            id: profile.node_id,
            name: profile.name!,
            email: profile.email,
            avatarUrl: profile.avatar_url,
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

async function auth(request: NextApiRequest, response: NextApiResponse) {
  return await NextAuth(
    request,
    response,
    buildNextAuthOptions(request, response),
  )
}

export { auth as GET, auth as POST }
