import styled from "styled-components"
//helpers
import { breakpoints } from "../utils/breakpoints"
import * as palette from "../utils/styles"

export const Container = styled.div`
  padding: 0 1em;
  max-width: 1220px;
  height: 100%;
  padding: 0 25px;
  margin: 0 auto;
  overflow-x: hidden;
  font-family: "Work Sans", sans-serif;
`

export const Headline = styled.h2`
  color: ${props =>
    props.blue ? `${palette.primaryBlue}` : `${palette.textColor}`};
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1em;
`
export const Text = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.5em;
  span {
    color: ${palette.primaryBlue};
  }
`
export const Icon = styled.img`
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
`
