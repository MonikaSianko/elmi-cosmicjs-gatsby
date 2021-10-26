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
    @media ${breakpointsMin.l} {
      padding-top: 150px;
      padding-bottom: 50px;
      position: relative;

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
    @media ${breakpointsMax.l} {
      background: ${colors.whiteGradient};
    }
    @media ${breakpointsMax.m} {
      background: transparent;
    }
  }
  .content-box {
    @media ${breakpointsMin.l} {
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
    right: 3%;
  }
  .hero-image-mobile-wrapper {
    position: relative;
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 80%;
      background-color: ${colors.text};
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
  }

  @media ${breakpointsMax.m} {
    padding-bottom: ${spaces.xxl};
    .text {
      width: 100%;
      padding-bottom: ${spaces.m};
      h3 {
        padding-top: ${spaces.xs};
      }
      p {
        padding-top: ${spaces.s};
      }
    }
  }

  @media ${breakpointsMax.s} {
    .btns-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .btn-primary {
        margin-bottom: ${spaces.m};
      }
      .btn-primary,
      .btn-secondary {
        width: 100%;
      }
    }
  }
`
