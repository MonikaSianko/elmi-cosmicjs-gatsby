import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import * as palette from "../utils/styles"

// SERVICE
export const ServiceWrapper = styled.div`
  background-color: ${palette.bgGrey};
  padding: 4em 0;
  margin-bottom: 4em;
  box-shadow: ${palette.cardShadow};
`
export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: ${palette.cardShadow};
  border-radius: 0.5rem;
  padding: 2em;

  @media ${breakpoints.lgMin} {
    flex-direction: row;
  }

  div {
    border-bottom: 0.5rem solid ${palette.primaryBlue};

    @media ${breakpoints.lgMin} {
      border-bottom: none;
      border-right: 0.5rem solid ${palette.primaryBlue};
    }
  }
  h3 {
    text-transform: uppercase;
    color: ${palette.primaryBlue};
    padding-bottom: 1em;
  }
  p {
    padding-bottom: 1em;
  }
  img {
    height: 300px;
    width: 300px;
    @media ${breakpoints.md} {
      height: auto;
      width: 100%;
    }
  }
`
export const DetailsCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.3em;
  margin-top: 2em;
  @media ${breakpoints.mdMin} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: ${palette.cardShadow};
    border-radius: 0.5rem;
    padding: 1em;
    margin: 1em;
    position: relative;
    div {
      border-radius: 50%;
      box-shadow: none;
      background-color: ${palette.primaryBlue};
      color: white;
      font-weight: 900;
      width: 1em;
      height: 1em;
      position: absolute;
      left: -2em;
    }
    h3 {
      margin-left: 2em;
    }
    img {
      margin-left: 1em;
    }
  }
`
