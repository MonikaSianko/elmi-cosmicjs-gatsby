import styled from "styled-components"
import * as palette from "../../utils/styles"
import aboutImage from "../../../assets/team-work.jpg"
import { breakpoints } from "../../utils/breakpoints"

export const Wrapper = styled.div`
  position: relative;
  padding-top: 5em;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    background-color: ${palette.bgGrey};
  }
`
export const AboutBox = styled.div`
  display: flex;
`

export const AboutText = styled.div`
  padding-bottom: 6em;
  h2 {
    padding-bottom: 2em;
  }
  @media ${breakpoints.smMin} {
    padding-bottom: 10em;
    padding-right: 2em;
  }
  @media ${breakpoints.mdMin} {
    padding-bottom: 2em;
  }
`

export const ImageAbout = styled.div`
  background-image: url(${aboutImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 240px;
  position: absolute;
  bottom: 0;
  z-index: -2;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${palette.imgOverlay};
    z-index: -1;
    position: absolute;
    bottom: 0;
  }
  @media ${breakpoints.mdMin} {
    position: inherit;
    :after {
      background: none;
    }
  }
`
