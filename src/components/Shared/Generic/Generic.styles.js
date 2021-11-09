import { FiArrowDownCircle } from "react-icons/fi"
import styled, { css } from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  radius,
  shadows,
  spaces,
} from "../../../constants/contants"

export const card = css`
  background-color: ${colors.white};
  box-shadow: ${shadows.cardShadow};
  border-radius: ${radius.m};
`

export const ArrowDown = styled(FiArrowDownCircle)`
  color: ${colors.primaryBlue};
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;
`
export const ArrowUp = styled(ArrowDown)`
  transform: rotate(180deg);
`

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
    font-size: ${fontSize.l};
  }
  h3 {
    color: ${colors.primaryBlue};
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.light};
  }
  h4 {
    font-size: ${fontSize.m};
  }
  h5,
  p,
  a {
    font-size: ${fontSize.s};
  }
  p {
    font-weight: ${fontWeight.light};
    line-height: 40px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  @media ${breakpointsMax.s} {
    padding: 0 ${spaces.m};

    h1 {
      font-size: ${fontSize.xl};
    }
    h2 {
      font-size: ${fontSize.ml};
    }
    h3,
    h4 {
      font-size: ${fontSize.m};
    }
    h5 {
      font-size: ${fontSize.s};
    }
    p {
      font-size: ${fontSize.xs};
    }
  }
`
