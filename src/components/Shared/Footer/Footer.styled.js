import styled from "styled-components"
import Link from "gatsby-link"

import * as palette from "../../utils/styles"
import { breakpoints } from "../../utils/breakpoints"
import { fontSize, spaces } from "../../../constants/contants"

export const StyledFooterWrapper = styled.div`
  width: 100%;
  border-top: ${palette.borderBlue};
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
    @media ${breakpoints.sm} {
      flex-direction: column;
      border-left: 5px solid ${palette.primaryBlue};
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
    color: ${palette.textColor};
    font-size: ${fontSize.xs};
    vertical-align: top;
    line-height: 16px;
    :hover {
      color: ${palette.primaryBlue};
      border-bottom: ${palette.borderBlue};
    }
  }
`
