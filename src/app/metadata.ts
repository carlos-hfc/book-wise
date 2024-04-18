import { Metadata } from "next"

export const config: Metadata = {
  title: {
    default: "BookWise",
    template: "%s | BookWise",
  },
  description: "Recomende e avalie os melhores livros.",
  twitter: {
    card: "summary_large_image",
    images: {
      url: "/favicon/favicon-2048x2048.png",
      alt: "BookWise Logo",
    },
  },
  openGraph: {
    type: "website",
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
    locale: "pt_BR",
    siteName: "BookWise",
    images: {
      url: "/favicon/favicon-2048x2048.png",
      alt: "BookWise Logo",
    },
  },
  icons: {
    shortcut: "/favicon/shortcut-icon.png",
    other: {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
  },
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL),
  },
}
