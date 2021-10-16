import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

function ButtonPrimary({ href, text }) {
  return (
    <Button>
      <a href={href}>{text}</a>
    </Button>
  )
}

export default ButtonPrimary

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: ${palette.btnPrimary};
  color: white;
  border-radius: 1rem;
  padding: 0.5em 2em;
  margin-right: 1em;
  :hover {
    border-radius: 0;
    transition: all 1s ease 0s;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media ${breakpoints.sm} {
    margin-bottom: 2em;
    margin-right: 0;
    height: 2.5em;
  }
`
