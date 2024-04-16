import { styled } from "@/styles"

export const LastReadContainer = styled("div", {
  borderRadius: 8,
  backgroundColor: "$gray-600",
  border: "2px solid transparent",
  padding: "$5 $6",
  display: "flex",
  gap: "$6",
  cursor: "pointer",

  "&:hover": {
    borderColor: "$gray-500",
  },
})

export const LastReadImage = styled("div", {
  position: "relative",
  width: 108,
  height: 152,
  aspectRatio: "108 / 152",

  img: {
    borderRadius: 4,
    objectFit: "cover",
  },
})

export const LastReadContent = styled("div", {
  display: "flex",
  flexDirection: "column",

  p: {
    all: "unset",
    marginTop: "auto",
    color: "$gray-300",
    lineHeight: "$base",
    fontSize: "$sm",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
  },
})

export const LastReadHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$3",

  time: {
    color: "$gray-300",
    fontSize: "$sm",
    lineHeight: "$base",
  },
})

export const LastReadInfo = styled("div", {
  h3: {
    color: "$gray-100",
    fontWeight: "$bold",
    fontSize: "$md",
    lineHeight: "$short",
  },

  span: {
    color: "$gray-400",
    fontSize: "$sm",
    lineHeight: "$base",
  },
})
