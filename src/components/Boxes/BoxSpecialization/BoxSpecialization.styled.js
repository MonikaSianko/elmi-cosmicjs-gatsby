import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontWeight,
  radius,
  spaces,
} from "../../../constants/contants"

export const StyledSpecializationWrapper = styled.div`
  display: flex;
  padding: 80px 0;
  img {
    width: auto;
    max-height: 370px;
    right: 0;
    border-radius: ${radius.m};
    @media ${breakpointsMax.l} {
      display: none;
    }
  }
  .text-box {
    padding-right: ${spaces.m};
    display: flex;
    align-items: center;

    p {
      margin-left: ${spaces.m};
      position: relative;
      ::before {
        content: "";
        position: absolute;
        width: ${spaces.xs};
        height: 100%;
        top: 0;
        left: -${spaces.m};
        background: ${colors.borderGradient};
      }
    }
    span,
    strong {
      font-weight: ${fontWeight.light};
    }
  }
`
