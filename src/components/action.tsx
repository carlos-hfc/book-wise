import Link from "next/link"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface ActionProps extends ComponentProps<typeof Link> {
  color?: "white" | "purple"
  size?: "md" | "sm"
}

export function Action({
  color = "white",
  size = "md",
  ...props
}: ActionProps) {
  const colorS =
    color === "white"
      ? "text-gray-200 hover:bg-gray-200/[.04]"
      : "text-purple-100 hover:bg-purple-100/[.06]"

  const sizeS = size === "md" ? "gap-3 text-base" : "gap-2 text-sm"

  return (
    <Link
      {...props}
      className={cn(
        "flex items-center rounded px-2 py-1 font-bold leading-relaxed no-underline",
        colorS,
        sizeS,
        props.className,
      )}
    />
  )
}
