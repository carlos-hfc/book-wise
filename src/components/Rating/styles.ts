import { styled } from "@/styles"

export const RatingContainer = styled("div", {
  "*": {
    color: "$purple-100",
  },

  "> * + *": {
    marginLeft: "$1",
  },
})
