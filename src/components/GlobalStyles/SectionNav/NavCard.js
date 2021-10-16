import React from "react"
import styled from "styled-components"
import * as palette from "../../utils/styles"
import { FiArrowDownCircle } from "react-icons/fi"
import { slide_in_bottom } from "../../utils/keyframes"
import { breakpoints } from "../../utils/breakpoints"

export default function NavCard({ src, alt, text, href }) {
  return (
    <Card>
      <img src={src} alt={alt}></img>
      <h3>{text}</h3>
      <a href={href}>
        <ArrowDown />
      </a>
    </Card>
  )
}

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: ${palette.borderBlue};
  min-height: 90vh;
  font-family: "Work Sans", sans-serif;
  @media ${breakpoints.mdMin} {
    flex-direction: row;
  }
`

const Card = styled.div`
  background-color: white;
  box-shadow: ${palette.cardShadow};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5em;
  padding: 2em 0;
  width: 15em;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: ${slide_in_bottom} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  :first-child {
    margin-top: 4rem;
  }
  :last-child {
    margin-bottom: 4rem;
  }
  @media ${breakpoints.mdMin} {
    padding: 4em 2em;
    margin: 0 2em;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
  h3 {
    width: 80%;
    font-weight: 600;
    margin-top: 1.5em;
  }
  img {
    width: 5em;
    height: 5em;
    transition: all 0.2s ease-in-out;
  }
`
const ArrowDown = styled(FiArrowDownCircle)`
  color: ${palette.primaryBlue};
  width: 2.5em;
  height: 2.5em;
  margin-top: 1.5em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`
