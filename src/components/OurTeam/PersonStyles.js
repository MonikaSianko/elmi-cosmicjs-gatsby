import styled from "styled-components"
//helpers
import * as palette from "../utils/styles"
import { breakpoints } from "../utils/breakpoints"
//keyframes
import { text_focus_in } from "../utils/keyframes"

export const OurTeamWrapper = styled.div`
  background-color: ${palette.bgGrey};
  padding: 4em 0;
  h2 {
    padding-bottom: 2em;
    color: ${palette.textColor};
    animation: ${text_focus_in} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media ${breakpoints.mdMin} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const Card = styled.div`
  background-color: white;
  box-shadow: ${palette.cardShadow};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4em 1em;
  margin: 2em 0;
  width: 15rem;

  @media ${breakpoints.mdMin} {
    padding: 3em;
  }

  border-radius: 0.5rem;
  div {
    margin-bottom: 2em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
    :first-of-type {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background-size: cover;
    }
    :last-of-type {
      width: 100%;
      border-bottom: ${palette.borderBlue};
      border-top: ${palette.borderBlue};
      padding: 1em 0;
      text-align: center;
    }
  }

  h4 {
    font-weight: 600;
  }
  > p {
    max-width: 25ch;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`
