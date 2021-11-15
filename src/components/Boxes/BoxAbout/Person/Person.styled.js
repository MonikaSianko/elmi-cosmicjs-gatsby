import styled from "styled-components"
import {
  breakpointsMax,
  spaces,
  radius,
  fontWeight,
  borders,
} from "../../../../constants/contants"
import { card } from "../../../Shared/Styles/Generic.styles"

export const StyledPerson = styled.div`
  ${card}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  margin: 0 ${spaces.xs};
  margin-top: ${spaces.xl};
  padding: ${spaces.m};
  @media ${breakpointsMax.s} {
    :first-of-type {
      margin-top: 0;
    }
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: ${radius.circle};
    margin-bottom: ${spaces.m};
  }
  .title {
    padding: ${spaces.l} 0;
    text-align: center;
    border-top: ${borders.blue};
    border-bottom: ${borders.blue};
    width: 100%;
    margin-bottom: ${spaces.m};
    h5 {
      text-transform: uppercase;
      font-weight: ${fontWeight.medium};
      padding-top: ${spaces.xs};
    }
  }
`
