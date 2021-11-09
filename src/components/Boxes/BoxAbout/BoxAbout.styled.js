import styled from "styled-components"
import {
  fontSize,
  fontWeight,
  spaces,
  colors,
  breakpointsMax,
} from "../../../constants/contants"

export const StyledBoxAbout = styled.section`
  padding-top: 120px;
  .heading-description {
    display: flex;
    align-items: center;
    .text-box {
      h4 {
        font-size: ${fontSize.l};
        font-weight: ${fontWeight.medium};
        margin-bottom: ${spaces.l};
      }
    }
    @media ${breakpointsMax.m} {
      img {
        display: none;
      }
      .text-box {
        margin-bottom: ${spaces.xxl};
      }
    }
  }
  .team-members {
    background-color: ${colors.lightGrey};
    padding: ${spaces.xxxl} 0;
    .team-members-box {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    h2 {
      padding-bottom: ${spaces.xxl};
      font-weight: ${fontWeight.medium};
    }
  }
`
