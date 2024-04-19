import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface AvatarProps extends ComponentProps<typeof Image> {
  size?: "md" | "sm"
  href: LinkProps["href"]
}

export function Avatar({ size = "sm", ...props }: AvatarProps) {
  const sizeS = size === "sm" ? "size-10" : "size-18"
  const widthHeight = size === "sm" ? 40 : 72

  return (
    <Link
      href={props.href}
      prefetch={false}
    >
      <Image
        {...props}
        alt={props.alt}
        width={widthHeight}
        height={widthHeight}
        className={cn(
          "size-10 rounded-full border border-transparent bg-gradient-vertical bg-clip-border object-cover",
          sizeS,
          props.className,
        )}
      />
    </Link>
  )
}
