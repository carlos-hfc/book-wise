import "next-auth"

declare module "next-auth" {
  export interface User {
    id: string
    name: string
    avatarUrl: string
  }

  export interface Session {
    user: User
  }
}
