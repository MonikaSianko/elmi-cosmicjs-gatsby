import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  spaces,
} from "../../../constants/contants"

export const StyledContactInfo = styled.div`
  background-color: ${colors.lightGrey};
  padding: ${spaces.xl} 0;
  .contact-info {
    display: flex;
    justify-content: space-between;
    padding-top: ${spaces.xl};
    > div {
      display: flex;
      align-items: center;
      p,
      a {
        width: 100%;
        padding-left: ${spaces.m};
        color: ${colors.text};
        font-weight: ${fontWeight.light};
        font-size: ${fontSize.s};
      }
      a:hover {
        color: ${colors.primaryBlue};
      }
      img {
        max-width: 35px;
        max-height: 35px;
      }
    }
  }
  @media ${breakpointsMax.m} {
    .contact-info {
      flex-direction: column;
      justify-content: center;
      padding: ${spaces.s} 0;
      > div {
        padding: ${spaces.s} 0;
        p,
        a {
          font-size: ${fontSize.xs};
        }
      }
    }
  }
`
