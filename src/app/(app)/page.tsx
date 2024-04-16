"use client"

import Image from "next/image"
import Link from "next/link"

import { AccessButton } from "@/components/AccessButton"

import {
  Button,
  Container,
  FormContainer,
  FormHeader,
  Icon,
  ImageContainer,
} from "./styles"

export default function App() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/logo-full.png"
          alt="BookWise Logo"
          width="256"
          height="50"
        />
      </ImageContainer>

      <FormContainer>
        <div>
          <FormHeader>
            <h1>Boas vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>
          </FormHeader>

          <AccessButton access="google">Entrar com Google</AccessButton>

          <AccessButton access="github">Entrar com GitHub</AccessButton>

          <Button
            as={Link}
            href="/home"
          >
            <Icon src="/icons/rocket.svg" />
            Acessar como visitante
          </Button>
        </div>
      </FormContainer>
    </Container>
  )
}
