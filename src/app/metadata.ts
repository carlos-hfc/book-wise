import { Metadata } from "next"

export const config: Metadata = {
  title: "BookWise",
  description: "Recomende e avalie os melhores livros.",
  twitter: {
    card: "summary_large_image",
    title: "BookWise",
    description: "Recomende e avalie os melhores livros.",
    images: {
      url: "/favicon/favicon-2048x2048.png",
      alt: "BookWise Logo",
    },
  },
  openGraph: {
    type: "website",
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
    title: "BookWise",
    locale: "pt_BR",
    siteName: "BookWise",
    description: "Recomende e avalie os melhores livros.",
    images: {
      url: "/favicon/favicon-2048x2048.png",
      alt: "BookWise Logo",
    },
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    shortcut: "/shortcut-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL),
  },
}
