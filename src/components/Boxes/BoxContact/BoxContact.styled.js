import styled from "styled-components"
import { colors, spaces } from "../../../constants/contants"

export const StyledContactWrapper = styled.section`
  background-color: ${colors.lightGrey};
  .upper-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    img {
      height: 450px;
    }
  }
  .contact-info {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    > div {
      display: flex;

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
