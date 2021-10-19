import styled from "styled-components"
import {
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
  h1 {
    font-size: ${fontSize.xxxl};
    font-weight: ${fontWeight.regular};
  }
  h2 {
    font-size: 24px;
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
`
