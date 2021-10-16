import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 4em;
  @media ${breakpoints.mdMin} {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 7em;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 2em 0;
    color: ${palette.textColor};
    img {
      margin-right: 1em;
    }
  }
`
