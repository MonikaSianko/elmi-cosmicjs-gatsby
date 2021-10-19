import styled from "styled-components"
import {
  breakpointsMax,
  breakpointsMin,
  colors,
  radius,
  spaces,
} from "../../../constants/contants"

export const StyledHeroWrapper = styled.section`
  height: 100%;


  .generic-wrapper {
    padding-top: 100px;
    @media ${breakpointsMin.l}{ 
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
  }
  .content-box {
    @media ${breakpointsMin.l}{
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
  }
  .hero-image-desktop {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 55%;
    position: absolute;
    z-index: -1;
    bottom: 30%;
    right: 3%;}
  }
  .hero-image-mobile-wrapper{
    position: relative;
    ::after {
      content: "";
      width: 120%;
      height: 80%;
      background-color: ${colors.text};
      position: absolute;
      bottom: 3px;
      left: 0;
      z-index: -5;
      border-radius: ${radius.button};
    }
  }
  .hero-image-mobile {
    height: auto;
    width: 90%;
    margin-top: ${spaces.m};
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
    @media ${breakpointsMax.m}{
      width: 100%;
      padding-bottom: ${spaces.xxl};
    h3 {
      padding-top: ${spaces.m};
    }
    p {
      padding-top: ${spaces.m};
    }
    
  }
`
