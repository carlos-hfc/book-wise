import { styled } from "@/styles"

import { RatingContainer } from "../Rating/styles"

export const TrendingImage = styled("div", {
  position: "relative",
  width: 64,
  height: 94,
  aspectRatio: "64 / 94",

  img: {
    borderRadius: "$base",
    objectFit: "cover",
  },
})

export const TrendingContainer = styled("div", {
  borderRadius: "$lg",
  backgroundColor: "$gray-700",
  border: "2px solid transparent",
  padding: "$4 $5",
  display: "flex",
  gap: "$5",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",

  "&:hover": {
    borderColor: "$gray-600",
  },

  variants: {
    read: {
      true: {
        "&::before": {
          content: "LIDO",
          position: "absolute",
          backgroundColor: "$green-300",
          color: "$green-100",
          right: 0,
          top: 0,
          zIndex: 1,
          fontWeight: "$bold",
          fontSize: "$xs",
          textTransform: "uppercase",
          lineHeight: "$shorter",
          padding: "$1 $2",
          borderBottomLeftRadius: 4,
        },
      },
    },

    size: {
      md: {
        [`> ${TrendingImage}`]: {
          width: 108,
          height: 152,
          aspectRatio: "108 / 152",
        },
      },
      sm: {
        [`> ${TrendingImage}`]: {
          width: 64,
          height: 94,
          aspectRatio: "64 / 94",
        },
      },
    },
  },

  defaultVariants: {
    read: false,
    size: "sm",
  },
})

export const TrendingContent = styled("div", {
  display: "flex",
  flexDirection: "column",

  h3: {
    color: "$gray-100",
    lineHeight: "$short",
    fontSize: "$md",
    fontWeight: "$bold",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
  },

  span: {
    color: "$gray-400",
    lineHeight: "$base",
    fontSize: "$sm",
  },

  [`> ${RatingContainer}`]: {
    marginTop: "auto",
  },
})
