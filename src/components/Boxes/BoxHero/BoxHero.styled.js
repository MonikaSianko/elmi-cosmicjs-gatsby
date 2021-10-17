import styled from "styled-components"
import { breakpointsMax, colors, spaces } from "../../../constants/contants"

export const StyledHeroWrapper = styled.section`
  height: 100%;
  overflow-y: hidden;

  .generic-wrapper {
    padding-top: 190px;
    padding-bottom: 95px;
    position: relative;
    height: 100%;
  }
  .content-box {
    padding-left: ${spaces.l};
    position: relative;
    ::before {
      content: "";
      position: absolute;
      width: ${spaces.xs};
      height: 100%;
      top: 0;
      left: 0;
      background: ${colors.borderGradient};
    }
  }
  .hero-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 100%;
    position: absolute;
    z-index: -3;
    top: 60px;
    right: 0;
  }
  .text {
    width: 60%;
    padding-bottom: ${spaces.xxl};
    h1 {
      color: ${colors.text};
    }
    h3 {
      padding-top: ${spaces.xs};
    }
  }
`
