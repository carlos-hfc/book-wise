"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MouseEvent, useRef, useState } from "react"

import { Tag } from "@/components/tag"

interface TagsProps {
  tags: {
    id: string
    name: string
  }[]
}

export function Tags({ tags }: TagsProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const tagsRef = useRef({} as HTMLDivElement)

  const [isDrag, setIsDrag] = useState(false)

  function onMove(event: MouseEvent) {
    if (isDrag) tagsRef.current.scrollLeft -= event.movementX
  }

  function handleFilterByTag(tag: string) {
    const urlParams = new URLSearchParams(searchParams.toString())

    if (tag === "all") {
      urlParams.delete("tag")
    } else {
      urlParams.set("tag", tag)
    }

    router.replace(`${pathname}?${urlParams.toString()}`)
  }

  return (
    <div
      className="mb-12 mt-10 flex cursor-grab items-center gap-3 overflow-auto [&::-webkit-scrollbar]:hidden"
      ref={tagsRef}
      onMouseMove={onMove}
      onMouseDown={() => setIsDrag(true)}
      onMouseUp={() => setIsDrag(false)}
    >
      <Tag
        selected={!searchParams.has("tag")}
        onClick={() => handleFilterByTag("all")}
      >
        Tudo
      </Tag>

      {tags.map(tag => (
        <Tag
          key={tag.id}
          selected={searchParams.get("tag") === tag.name}
          onClick={() => handleFilterByTag(tag.name)}
        >
          {tag.name}
        </Tag>
      ))}
    </div>
  )
}
