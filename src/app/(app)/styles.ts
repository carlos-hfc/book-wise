import { styled } from "@/styles"

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  padding: "$5",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const ImageContainer = styled("div", {
  maxWidth: 600,
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: 10,
  overflow: "hidden",
  backgroundImage: "url(/bg-login.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    zIndex: 2,
  },

  "&::before": {
    content: "",
    zIndex: 1,
    background:
      "linear-gradient(0deg, rgba(42, 40, 121, 0.6), rgba(42, 40, 121, 0.6)), rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(1px)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
})

export const FormContainer = styled("div", {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const FormHeader = styled("header", {
  marginBottom: "$10",

  h1: {
    color: "$gray-100",
    fontSize: "$2xl",
    lineHeight: "$short",
  },

  p: {
    color: "$gray-200",
    fontSize: "$md",
    lineHeight: "$base",
  },
})

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: "$5",
  maxWidth: 372,
  width: "100%",
  padding: "$5 $6",
  backgroundColor: "$gray-600",
  borderRadius: "$lg",
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
