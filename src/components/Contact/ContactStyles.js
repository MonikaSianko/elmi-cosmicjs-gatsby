import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import * as palette from "../utils/styles"

export const ContactWrapper = styled.div`
  height: 100%;
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.5em;
  overflow: hidden;
  @media ${breakpoints.mdMin} {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 6em;
  }
`
