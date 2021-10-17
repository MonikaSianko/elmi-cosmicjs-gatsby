import styled from "styled-components"
import { colors, fontSize, fontWeight, spaces } from "../../constants/contants"

export const GenericWrapper = styled.div`
  max-width: 1240px;
  height: 100%;
  padding: 0 ${spaces.xxl};
  margin: 0 auto;
  font-family: "Ubuntu", sans-serif;
  h1 {
    font-size: ${fontSize.xxl};
    font-weight: ${fontWeight.bold};
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    color: ${colors.secondaryBlue};
    font-size: ${fontSize.l};
  }
  p {
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.light};
    line-height: 2em;
  }
  a {
    font-size: ${fontSize.xs};
    text-decoration: none;
    cursor: pointer;
  }
`
