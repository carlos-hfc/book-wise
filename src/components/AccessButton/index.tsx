import { ComponentProps } from "react"

import { Button, Icon } from "./styles"

interface AccessButtonProps extends ComponentProps<typeof Button> {
  access: "github" | "google"
}

export function AccessButton({
  access,
  children,
  ...props
}: AccessButtonProps) {
  return (
    <Button {...props}>
      <Icon src={`/icons/${access}.svg`} />
      {children}
    </Button>
  )
}
