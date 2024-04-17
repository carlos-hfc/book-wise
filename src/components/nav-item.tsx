import Link from "next/link"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface NavItemProps extends ComponentProps<typeof Link> {
  active?: boolean
}

export function NavItem({ active, ...props }: NavItemProps) {
  return (
    <Link
      {...props}
      className={cn(
        "relative flex items-center gap-3 py-2 text-base leading-relaxed no-underline *:size-6 hover:text-gray-100",
        active
          ? "font-bold text-gray-100 before:absolute before:-left-4 before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical"
          : "text-gray-400",
        props.className,
      )}
    />
  )
}
