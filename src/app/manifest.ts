import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BookWise",
    short_name: "BookWise",
    icons: [
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-2048x2048.png",
        sizes: "2048x2048",
        type: "image/png",
      },
    ],
    theme_color: "#8381D9",
    background_color: "#0E1116",
    display: "standalone",
    lang: "pt_BR",
    description: "Recomende e avalie os melhores livros.",
    start_url: ".",
  }
}
