import React from "react"
import Button from "./Button"
import { StyledButtonBox } from "./Buttons.styled"

function ButtonsBox({
  primary_href,
  primary_text,
  secondary_href,
  secondary_text,
}) {
  return (
    <StyledButtonBox className="btns-box">
      <Button href={primary_href} text={primary_text} className="btn-primary" />
      <Button
        href={secondary_href}
        text={secondary_text}
        className="btn-secondary"
      />
    </StyledButtonBox>
  )
}

export default ButtonsBox
