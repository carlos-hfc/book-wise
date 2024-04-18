import Image from "next/image"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface AvatarProps extends ComponentProps<typeof Image> {
  size?: "md" | "sm"
}

export function Avatar({ size = "sm", ...props }: AvatarProps) {
  const sizeS = size === "sm" ? "size-10" : "size-18"
  const widthHeight = size === "sm" ? 40 : 72

  return (
    <Image
      {...props}
      alt={props.alt}
      width={widthHeight}
      height={widthHeight}
      className={cn(
        "size-10 rounded-full border border-transparent bg-gradient-vertical bg-clip-border",
        sizeS,
        props.className,
      )}
    />
  )
}
