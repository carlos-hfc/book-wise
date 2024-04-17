import { styled } from "@/styles"

export const ReviewContainer = styled("div", {
  backgroundColor: "$gray-700",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  borderRadius: "$lg",
  padding: "$6",
})

export const ReviewHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  gap: "$4",

  img: {
    borderRadius: "$full",
    border: "1px solid transparent",
    backgroundImage: "$gradient-vertical",
    backgroundClip: "border-box",
  },
})

export const ReviewUser = styled("div", {
  flex: 1,

  h2: {
    color: "$gray-200",
    fontSize: "$md",
    lineHeight: "$base",
  },

  time: {
    color: "$gray-400",
    fontSize: "$sm",
    lineHeight: "$base",
  },
})

export const ReviewContent = styled("div", {
  display: "flex",
  gap: "$5",
})

export const ReviewImage = styled("div", {
  position: "relative",
  width: 108,
  height: 152,
  aspectRatio: "108 / 152",

  img: {
    borderRadius: "$base",
    objectFit: "cover",
  },
})

export const ReviewContentBody = styled("div", {
  display: "flex",
  flexDirection: "column",

  h3: {
    color: "$gray-100",
    lineHeight: "$short",
    fontSize: "$sm",
    fontWeight: "$bold",
  },

  span: {
    color: "$gray-400",
    lineHeight: "$base",
    fontSize: "$sm",
  },

  p: {
    all: "unset",
    marginTop: "$5",
    color: "$gray-300",
    lineHeight: "$base",
    fontSize: "$sm",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 4,
  },
})
