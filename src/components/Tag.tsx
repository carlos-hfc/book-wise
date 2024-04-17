import { styled } from "@/styles"

export const Tag = styled("button", {
  all: "unset",
  padding: "$1 $4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$full",
  border: "1px solid $purple-100",
  color: "$purple-100",
  fontSize: "$md",
  cursor: "pointer",

  "&:hover": {
    color: "$gray-100",
    backgroundColor: "$purple-200",
  },

  variants: {
    selected: {
      true: {
        color: "$gray-100",
        backgroundColor: "$purple-200",
        borderColor: "$purple-200",
      },
    },
  },
})
