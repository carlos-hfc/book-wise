import { LastReadContainer } from "@/components/LastRead/styles"
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

export const Content = styled("div", {
  display: "flex",
  gap: "4rem",
  marginTop: "$10",
})

export const LatestReviews = styled("div", {
  width: "65%",

  [`> ${LastReadContainer}`]: {
    marginBottom: "$10",
  },

  "> * + *": {
    marginTop: "$3",
  },

  p: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    marginBottom: "$4",
    color: "$gray-100",
    lineHeight: "$base",
    fontSize: "$sm",
  },
})

export const TrendingBooks = styled("div", {
  width: "35%",

  "> * + *": {
    marginTop: "$3",
  },

  p: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "$4",
    color: "$gray-100",
    lineHeight: "$base",
    fontSize: "$sm",
  },
})
