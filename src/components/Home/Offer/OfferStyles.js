import styled from "styled-components"

//helpers
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

//animations
import { text_focus_in } from "../../utils/keyframes"

export const Wrapper = styled.div`
  padding: 4em 0;
  background-color: ${palette.bgGrey};
  h2 {
    padding-bottom: 1em;
    animation: ${text_focus_in} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`

export const OfferBox = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media ${breakpoints.lgMin} {
    flex-direction: row;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: ${palette.cardShadow};
  background-color: white;
  margin-bottom: 30px;
  padding: 2em;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  @media ${breakpoints.mdMin} {
    padding: 3em;
  }
  img {
    @media ${breakpoints.mdMin} {
      width: 5em;
      height: 5em;
    }
  }
  p {
    font-weight: 800;
    text-transform: lowercase;
    padding: 0.5em 0 1em 0;
  }
  a {
    margin-bottom: 30px;
    padding: 0.5em 1.5em;
    border-radius: 20px;
    border: ${palette.borderBlue};
    color: ${palette.primaryBlue};
    text-decoration: none;
    font-size: 1rem;
    :hover {
      border-radius: 0;
      transition: all 1s ease 0s;
    }
  }
`
