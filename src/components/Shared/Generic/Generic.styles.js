import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  spaces,
} from "../../../constants/contants"

export const GenericWrapper = styled.div`
  max-width: 1240px;
  height: 100%;
  padding: 0 ${spaces.xxl};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  color: ${colors.text};
  overflow-x: hidden;
  h1 {
    font-size: ${fontSize.xxxl};
    font-weight: ${fontWeight.regular};
  }
  h2 {
    font-size: ${fontSize.l};
  }
  h3 {
    color: ${colors.primaryBlue};
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.light};
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
  @media ${breakpointsMax.md} {
    padding: 0 ${spaces.m};
  }
  h1 {
    font-size: ${fontSize.xl};
  }
  h2 {
    font-size: ${fontSize.m};
  }
  h3 {
    font-size: ${fontSize.s};
  }
  p,
  a {
    font-size: ${fontSize.xs};
  }
`
