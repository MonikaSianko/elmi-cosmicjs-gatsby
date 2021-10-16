import styled from "styled-components"
//helpers
import * as palette from "../../utils/styles"
import { breakpoints } from "../../utils/breakpoints"
//images
import heroImage from "../../../assets/hero.jpg"
//animations
import { text_focus_in, slide_in_top } from "../../utils/keyframes"

export const WrapperHero = styled.div`
  height: 100%;
  position: relative;
  padding: 10em 0;
  overflow-y: hidden;
`

export const ImageHero = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -3;
  top: 0;
  animation: ${text_focus_in} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @media ${breakpoints.mdMin} {
    width: 50%;
    right: 0;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 66% 100%);
  }
`

export const Text = styled.div`
  padding-bottom: 4rem;
  h1 {
    color: white;
    animation: ${slide_in_top} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  p {
    padding-top: 1em;
    color: ${palette.secondaryBlue};
    animation: ${text_focus_in} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @media ${breakpoints.mdMin} {
    width: 58%;
  }
`
