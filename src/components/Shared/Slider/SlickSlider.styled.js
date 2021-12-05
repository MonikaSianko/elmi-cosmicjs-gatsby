import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontWeight,
  spaces,
} from "../../../constants/contants"

export const StyledSlickSlider = styled.section`
  overflow-x: hidden;
  .partners {
    height: 200px;
    display: flex;
    align-items: center;
    @media ${breakpointsMax.l} {
      height: 100px;
      margin-bottom: ${spaces.xl};
    }
    .slick-slide {
      max-height: 100px;
      img {
        max-height: 80px;
        object-fit: contain;
        @media ${breakpointsMax.m} {
          width: 100%;
        }
      }
    }
    .slick-dots {
      bottom: ${spaces.m};
    }
  }
  .industries {
    height: 180px;
    display: flex;
    align-items: center;
    .slick-slide {
      > div {
        max-height: 140px;
      }
    }
    .icon {
      height: 100px;
      width: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .text {
      text-align: center;
      text-transform: uppercase;
      padding-top: ${spaces.xs};
      color: ${colors.primaryBlue};
      font-weight: ${fontWeight.medium};
    }
    @media ${breakpointsMax.s} {
      .icon {
        height: 80px;
      }
      .slick-slide {
        > div {
          height: 120px;
        }
      }
    }
  }
`
