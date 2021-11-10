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
    @media ${breakpointsMax.s} {
      flex-direction: column;
      border-left: 5px solid ${colors.primaryBlue};
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
    vertical-align: top;
    line-height: 16px;
    :hover {
      color: ${colors.primaryBlue};
      border-bottom: ${borders.blue};
    }
  }
`
