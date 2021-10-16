import styled from "styled-components"
import * as palette from "../../../utils/styles"
import { breakpoints } from "../../../utils/breakpoints"

import { GoGlobe } from "react-icons/go"
import { BiChevronDown } from "react-icons/bi"

export const LanguageBox = styled.div`
  background-color: white;
  position: absolute;
  right: calc(1vw + 1);
  @media ${breakpoints.md} {
    top: 60px;
    left: 0;
    padding: 35px 0;
    width: 100%;
    text-align: center;
  }
  @media ${breakpoints.lgMin} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: ${palette.boxShadow};
  }
  a:hover {
    text-decoration: underline;
  }
`

export const IconBox = styled.div`
  position: relative;
  padding-right: 1rem;
`
export const Globe = styled(GoGlobe)`
  padding-right: 0.5rem;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`
export const ArrowDown = styled(BiChevronDown)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -0.3rem;
`
