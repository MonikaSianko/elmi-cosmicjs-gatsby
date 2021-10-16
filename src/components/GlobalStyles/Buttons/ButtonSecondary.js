import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

function ButtonSecondary({ href, text, theme }) {
  return (
    <Button theme={theme}>
      <a href={href}>{text}</a>
    </Button>
  )
}

export default ButtonSecondary

const Button = styled.button`
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.4em 1.9em;
  background: none;
  border: 2px solid ${palette.secondaryBlue};
  :hover {
    border-radius: 0;
    transition: all 1s ease 0s;
  }
  a {
    color: ${props =>
      props.theme === "white" ? "white" : `${palette.secondaryBlue}`};
    text-decoration: none;
    @media ${breakpoints.sm} {
      color: white;
    }
  }
  @media ${breakpoints.sm} {
    height: 2.5em;
  }
`
