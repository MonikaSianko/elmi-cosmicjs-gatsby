import styled from "styled-components"

import { FiArrowDownCircle } from "react-icons/fi"
import * as palette from "../../utils/styles"
import { breakpoints } from "../../utils/breakpoints"

export const ByProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  img {
    width: 15em;
    height: 15em;
    margin-bottom: 1em;
  }
`
export const ArrowDown = styled(FiArrowDownCircle)`
  color: ${palette.primaryBlue};
  width: 3.5em;
  height: 3.5em;
  cursor: pointer;
`
