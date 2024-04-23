import Image from "next/image"
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  Fragment,
} from "react"

import { cn } from "@/utils/cn"

type AvatarProps<T extends ElementType> = {
  size?: "md" | "sm"
  as?: T | ElementType
} & (ComponentPropsWithoutRef<T> & ComponentProps<typeof Image>)

export function Avatar<T extends ElementType>({
  size = "sm",
  as = Fragment,
  src,
  alt,
  ...props
}: AvatarProps<T>) {
  const Tag: ElementType = as

  const sizeS = size === "sm" ? "size-10" : "size-18"
  const widthHeight = size === "sm" ? 40 : 72

  return (
    <Tag {...(as !== Fragment && props)}>
      <Image
        src={src}
        alt={alt}
        width={widthHeight}
        height={widthHeight}
        className={cn(
          "size-10 rounded-full border border-transparent bg-gradient-vertical bg-clip-border object-cover",
          sizeS,
          props.className,
        )}
      />
    </Tag>
  )
}
