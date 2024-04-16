import { styled } from "@/styles"

import { RatingContainer } from "../Rating/styles"

export const TrendingContainer = styled("div", {
  borderRadius: 8,
  backgroundColor: "$gray-700",
  border: "2px solid transparent",
  padding: "$4 $5",
  display: "flex",
  gap: "$5",
  cursor: "pointer",

  "&:hover": {
    borderColor: "$gray-600",
  },
})

export const TrendingImage = styled("div", {
  position: "relative",
  width: 64,
  height: 94,
  aspectRatio: "64 / 94",

  img: {
    borderRadius: 4,
    objectFit: "cover",
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
