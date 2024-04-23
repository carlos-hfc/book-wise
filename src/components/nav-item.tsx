"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface NavItemProps extends ComponentProps<typeof Link> {}

export function NavItem(props: NavItemProps) {
  const pathname = usePathname()
  const params = useParams<{ id: string }>()

  return (
    <Link
      {...props}
      prefetch={false}
      className={cn(
        "relative flex items-center gap-3 py-2 text-base leading-relaxed no-underline *:size-6 hover:text-gray-100",
        (props.href as string).includes(pathname.replace(params.id, ""))
          ? "font-bold text-gray-100 before:absolute before:-left-4 before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical"
          : "text-gray-400",
        props.className,
      )}
    />
  )
}
