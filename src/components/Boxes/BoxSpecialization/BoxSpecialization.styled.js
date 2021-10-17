import styled from "styled-components"
import { colors, radius, spaces } from "../../../constants/contants"

//helpers
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

export const StyledSpecializationWrapper = styled.div`
  display: flex;
  padding: 80px 0;
  img {
    width: auto;
    max-height: 370px;
    right: 0;
    border-radius: ${radius.m};
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
        height: 120%;
        top: -10%;
        left: -${spaces.m};
        background: ${colors.borderGradient};
      }
      > strong {
        color: ${colors.primaryBlue};
      }
    }
  }
`
