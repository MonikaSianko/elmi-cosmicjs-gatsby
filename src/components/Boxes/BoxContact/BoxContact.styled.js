import styled from "styled-components"
import { breakpointsMax, colors, spaces } from "../../../constants/contants"

export const StyledContactWrapper = styled.section`
  background-color: ${colors.lightGrey};
  padding-top: ${spaces.header};
  padding-bottom: ${spaces.xxxl};
  .upper-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-height: 450px;
    }
    form {
      width: 60%;
    }
  }
  .contact-info-wrapper {
    .heading {
      display: none;
    }
  }
  .contact-info {
    display: flex;
    justify-content: space-between;
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
  @media ${breakpointsMax.m} {
    .upper-row {
      flex-direction: column;
      align-items: flex-start;
      img {
        display: none;
      }
      form {
        margin-top: ${spaces.xl};
        width: 100%;
      }
    }
    .contact-info {
      flex-direction: column;
      > div {
        padding: ${spaces.m} 0;
      }
    }
  }
`
