import Image from "next/image"
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

type AccessButtonProps<T extends ElementType> = {
  access: "github" | "google" | "rocket"
  as?: T | ElementType
} & (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLOrSVGElement>)

export function AccessButton<T extends ElementType>({
  access = "rocket",
  as = "button" as const,
  children,
  ...props
}: AccessButtonProps<T>) {
  const Tag: ElementType = as

  return (
    <Tag
      {...props}
      className={cn(
        "flex min-w-80 cursor-pointer items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 font-bold leading-relaxed text-gray-200",
        props.className,
      )}
    >
      <Image
        src={`/icons/${access}.svg`}
        width={32}
        height={32}
        alt=""
      />
      {children}
    </Tag>
  )
}
