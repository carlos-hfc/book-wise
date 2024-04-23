import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface TagProps extends ComponentProps<"button"> {
  selected?: boolean
}

export function Tag({ selected = false, ...props }: TagProps) {
  const selectedS = selected
    ? "text-gray-100 bg-purple-200 border-purple-200"
    : "border-purple-100 text-purple-100"

  return (
    <button
      {...props}
      className={cn(
        "flex cursor-pointer select-none items-center justify-center rounded-full border px-4 py-1 text-base hover:bg-purple-200 hover:text-gray-100",
        selectedS,
        props.className,
      )}
    />
  )
}
