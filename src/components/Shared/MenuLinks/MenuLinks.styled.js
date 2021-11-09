import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  spaces,
} from "../../../constants/contants"

export const StyledMenuLinks = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding-left: 1em;
    @media ${breakpointsMax.m} {
      flex-direction: column;
    }
  }
  li {
    display: inline;
    padding: ${spaces.s};
    img {
      max-width: 16px;
      max-height: 16px;
      padding-right: ${spaces.xs};
    }
  }
  a {
    text-decoration: none;
    color: ${colors.text};
    font-size: ${fontSize.xs};
    vertical-align: top;
    line-height: 16px;
    :hover {
      color: ${colors.primaryBlue};
      border-bottom: ${colors.borderBlue};
    }
  }
`
