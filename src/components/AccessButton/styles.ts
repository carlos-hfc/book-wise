import { styled } from "@/styles"

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: "$5",
  maxWidth: 372,
  width: "100%",
  padding: "$5 $6",
  backgroundColor: "$gray-600",
  borderRadius: 8,
  color: "$gray-200",
  fontSize: "$lg",
  lineHeight: "$base",
  fontWeight: "$bold",
  cursor: "pointer",

  "& + &": {
    marginTop: "$4",
  },
})

export const Icon = styled("img", {
  width: 32,
  height: 32,
})
