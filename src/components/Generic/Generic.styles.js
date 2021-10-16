import styled from "styled-components"
import { colors } from "../../constants/contants"

export const GenericWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
  h1 {
    font-size: 42px;
    font-weight: 800;
  }
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    color: ${colors.richBlack};
  }
`
