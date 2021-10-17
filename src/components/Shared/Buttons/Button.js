import React from "react"
import { StyledButton } from "./Buttons.styled"

function Button({ href, text, theme, className }) {
  return (
    <StyledButton theme={theme} className={className}>
      <a href={href}>{text}</a>
    </StyledButton>
  )
}

export default Button
