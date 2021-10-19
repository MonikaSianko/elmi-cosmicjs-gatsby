import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  radius,
  spaces,
} from "../../../constants/contants"

export const StyledHeroWrapper = styled.section`
  height: 100%;
  overflow-y: hidden;

  .generic-wrapper {
    padding-top: 150px;
    padding-bottom: 50px;
    position: relative;
    height: 100%;
    ::after {
      content: "";
      width: 40%;
      height: 50%;
      background-color: ${colors.text};
      position: absolute;
      bottom: 30%;
      right: 0;
      z-index: -5;
      border-radius: ${radius.button};
    }
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
    height: 55%;
    position: absolute;
    z-index: -1;
    bottom: 30%;
    right: 3%;
  }
  .text {
    width: 55%;
    padding-bottom: ${spaces.xxl};
    h1 {
      color: ${colors.text};
    }
    h3 {
      padding-top: ${spaces.m};
    }
    p {
      padding-top: 60px;
    }
  }
`
