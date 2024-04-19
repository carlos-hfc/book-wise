import "next-auth"

declare module "next-auth" {
  export interface User {
    id: string
    name: string
    avatarUrl: string
    createdAt: Date
  }

  export interface Session {
    user: User
  }
}
