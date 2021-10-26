import styled from "styled-components"
import { breakpointsMax, colors, spaces } from "../../../constants/contants"

export const StyledContactWrapper = styled.section`
  background-color: ${colors.lightGrey};
  .upper-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    @media ${breakpointsMax.m} {
      flex-direction: column-reverse;
    }
    img {
      max-height: 450px;
      @media ${breakpointsMax.l} {
        max-height: 350px;
      }
    }
  }
  .contact-info {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    @media ${breakpointsMax.m} {
      flex-direction: column;
    }
    > div {
      display: flex;
      @media ${breakpointsMax.m} {
        padding: ${spaces.m} 0;
      }
      p {
        width: 100%;
        padding-left: ${spaces.m};
      }
      img {
        max-width: 35px;
        max-height: 35px;
      }
    }
  }
`
