import styled from "styled-components"
import { colors, fontWeight, spaces } from "../../../constants/contants"

export const StyledIndustries = styled.div`
  display: flex;
  padding-top: 40px;
  .industry-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${spaces.m};
    :hover {
      position: relative;
      ::before {
        content: "";
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: ${colors.lightBlueHue};
        position: absolute;
        z-index: -1;
      }
    }
    > div {
      text-transform: uppercase;
      color: ${colors.primaryBlue};
      padding-top: ${spaces.xs};
      font-weight: ${fontWeight.medium};
    }
    img {
      width: 90px;
      height: 90px;
    }
  }
`
