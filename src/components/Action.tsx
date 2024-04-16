import Link from "next/link"

import { styled } from "@/styles"

export const Action = styled(Link, {
  display: "flex",
  alignItems: "center",
  padding: "$1 $2",
  textDecoration: "none",
  fontWeight: "$bold",
  borderRadius: 4,
  lineHeight: "$base",

  svg: {
    width: 20,
    height: 20,
  },

  variants: {
    color: {
      white: {
        color: "$gray-200",

        "&:hover": {
          backgroundColor: "color-mix(in srgb, $gray-200 4%, transparent)",
        },
      },
      purple: {
        color: "$purple-100",

        "&:hover": {
          backgroundColor: "color-mix(in srgb, $purple-100 6%, transparent)",
        },
      },
    },

    size: {
      medium: {
        fontSize: "$md",
        gap: "$3",
      },
      small: {
        fontSize: "$sm",
        gap: "$2",
      },
    },
  },

  defaultVariants: {
    color: "white",
    size: "medium",
  },
})
