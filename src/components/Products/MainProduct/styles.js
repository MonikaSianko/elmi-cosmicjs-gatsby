import styled from "styled-components"

import * as palette from "../../utils/styles"
import { breakpoints } from "../../utils/breakpoints"

export const MainProductBox = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 15em;
    height: 15em;
    margin-bottom: 1em;
  }
`
