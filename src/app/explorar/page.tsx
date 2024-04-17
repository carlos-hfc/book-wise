import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

import { Tag } from "@/components/Tag"
import { Trending } from "@/components/Trending"

import { BooksContent, Container, ExploreTags, Header, Input } from "./styles"

export default function Explorar() {
  return (
    <Container>
      <Header>
        <h1>
          <Binoculars />
          Explorar
        </h1>

        <label>
          <Input placeholder="Buscar livro ou autor" />
          <MagnifyingGlass />
        </label>
      </Header>

      <ExploreTags>
        {Array.from({ length: 10 }).map((_, i) => (
          <Tag key={i}>Tudo</Tag>
        ))}
      </ExploreTags>

      <BooksContent>
        {Array.from({ length: 15 }).map((_, i) => (
          <Trending
            key={i}
            size="md"
          />
        ))}
      </BooksContent>
    </Container>
  )
}
