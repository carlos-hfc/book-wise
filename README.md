<p align="center">
  <img src="./public/logo-full.png" width="250" /> 
</p>

<br/>

## :bulb: Sobre

O **Book Wise** é uma aplicação para recomendar e avaliar livros.

## :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

## :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/book-wise
```

2. Acesse o diretório do projeto:

```bash
cd book-wise
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione as seguinte chaves:

```env
# Next
NEXT_PUBLIC_BASE_URL=""

# Prisma
DATABASE_URL=""

# GitHub provider
GITHUB_ID=""
GITHUB_SECRET=""

# Google provider
GOOGLE_ID=""
GOOGLE_SECRET=""

# Next auth
NEXTAUTH_SECRET=""
```

5. Rode a aplicação

```bash
npm run dev
```

## :computer_mouse: Uso da aplicação

1. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)
2. Acesse a plataforma como visitante ou entre utilizando sua conta do Google ou do GitHub
3. Veja as últimas avaliações
4. Explore e filtre todos os livros avaliados
5. Veja as avaliações de outros usuários
6. Avalie livros de sua escolha


## :computer: Tecnologias utilizadas

<p float="left">
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
  <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
</p>

## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).