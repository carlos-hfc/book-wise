import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

import { Container, Header, Input } from "./styles"

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
    </Container>
  )
}
