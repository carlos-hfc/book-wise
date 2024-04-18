import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps) {
  return (
    <label className="relative cursor-auto">
      <input
        {...props}
        className={cn(
          "peer w-[430px] rounded border border-green-300 bg-gray-800 py-[.875rem] pl-5 pr-12 text-sm leading-relaxed text-gray-200 outline-none placeholder:text-gray-400 placeholder-shown:border-gray-500 focus:border-green-300",
          props.className,
        )}
      />
      <MagnifyingGlass className="absolute right-5 top-1/2 size-5 -translate-y-1/2 text-green-300 peer-placeholder-shown:text-gray-500 peer-focus-within:text-green-300" />
    </label>
  )
}
