import { styled } from "@/styles"

export const Container = styled("main", {
  padding: "4.5rem 6rem",
  flex: 1,

  h1: {
    display: "flex",
    alignItems: "center",
    gap: "$3",
    fontSize: "$2xl",
    lineHeight: "$short",
    color: "$gray-100",

    svg: {
      color: "$green-100",
      width: "$8",
      height: "$8",
    },
  },
})

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",

  label: {
    position: "relative",
    cursor: "auto",

    "&:focus-within, &:has(input:not(:placeholder-shown))": {
      svg: {
        color: "$green-300",
      },
    },

    svg: {
      position: "absolute",
      right: "$5",
      top: "50%",
      transform: "translateY(-50%)",
      color: "$gray-500",
      width: "$5",
      height: "$5",
    },
  },
})

export const Input = styled("input", {
  all: "unset",
  color: "$gray-200",
  backgroundColor: "$gray-800",
  border: "1px solid $gray-500",
  paddingTop: ".875rem",
  paddingBottom: ".875rem",
  paddingLeft: "$5",
  paddingRight: "3rem",
  borderRadius: "$base",
  width: 430,

  "&::placeholder": {
    color: "$gray-400",
  },

  "&:focus, &:not(:placeholder-shown)": {
    borderColor: "$green-300",
  },
})

export const ExploreTags = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  margin: "$10 0 3rem",
})

export const BooksContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "auto",
  gap: "$5",
})
