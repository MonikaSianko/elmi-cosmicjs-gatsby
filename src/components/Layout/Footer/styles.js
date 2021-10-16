import styled from "styled-components"
import Link from "gatsby-link"

import * as palette from "../../utils/styles"
import { breakpoints } from "../../utils/breakpoints"

export const FooterWrapper = styled.div`
  width: 100%;
  border-top: ${palette.borderBlue};
`

export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;

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
    padding: 1em;
    img {
      width: 1em;
      height: 1em;
      padding-right: 0.5em;
    }
  }
`

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${palette.textColor};
  :hover {
    color: ${palette.primaryBlue};
    border-bottom: ${palette.borderBlue};
  }
`
