import styled from "styled-components"
import {
  borders,
  breakpointsMax,
  colors,
  fontSize,
  spaces,
} from "../../../constants/contants"

export const StyledFooterWrapper = styled.div`
  width: 100%;
  border-top: ${borders.blue};
  .generic-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding-left: 1em;
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
  a,
  button {
    text-decoration: none;
    color: ${colors.text};
    vertical-align: top;
    line-height: 16px;
    :hover {
      color: ${colors.primaryBlue};
      text-decoration: underline;
    }
  }
  button {
    background-color: transparent;
    border: none;
    padding-left: ${spaces.s};
    font-size: ${fontSize.s};
    cursor: pointer;
    border-left: ${borders.blue};
  }
  @media ${breakpointsMax.m} {
    button {
      border: none;
      font-size: ${fontSize.xxs};
    }
  }
  @media ${breakpointsMax.s} {
    ul {
      flex-direction: column;
      border-left: 5px solid ${colors.primaryBlue};
    }
  }
`
