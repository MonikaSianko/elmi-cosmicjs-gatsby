import styled from "styled-components"
import {
  borders,
  breakpointsMax,
  colors,
  fontSize,
  radius,
  shadows,
  spaces,
} from "../../../constants/contants"

export const StyledBoxProducts = styled.section`
  background-color: ${colors.lightGrey};
  padding: 80px 0;
  .products-wrapper {
    padding: 20px 40px;
    background-color: white;
    border-radius: ${radius.s};
    box-shadow: ${shadows.cardShadow};
    :first-of-type {
      margin-bottom: ${spaces.xl};
    }
    @media ${breakpointsMax.m} {
      padding: 20px;
    }
  }
  .heading {
    display: flex;
    align-items: center;
    padding-bottom: ${spaces.xl};
    h2 {
      font-size: ${fontSize.l};
      color: ${colors.primaryBlue};
    }
    img {
      width: 60px;
      height: 60px;
      margin-right: ${spaces.s};
    }
  }
`
