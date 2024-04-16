import { CaretRight, ChartLineUp } from "@phosphor-icons/react/dist/ssr"

import { Action } from "@/components/Action"
import { LastRead } from "@/components/LastRead"
import { Review } from "@/components/Review"
import { Trending } from "@/components/Trending"

import { Container, Content, LatestReviews, TrendingBooks } from "./styles"

export default function Home() {
  return (
    <Container>
      <h1>
        <ChartLineUp />
        Início
      </h1>

      <Content>
        <LatestReviews>
          <p>
            Sua última leitura
            <Action
              href="/"
              color="purple"
              size="small"
            >
              Ver todos
              <CaretRight />
            </Action>
          </p>

          <LastRead />

          <p>Avaliações mais recentes</p>

          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </LatestReviews>

        <TrendingBooks>
          <p>
            Livros populares
            <Action
              href="/"
              color="purple"
              size="small"
            >
              Ver todos
              <CaretRight />
            </Action>
          </p>

          <Trending />
          <Trending />
          <Trending />
          <Trending />
        </TrendingBooks>
      </Content>
    </Container>
  )
}
