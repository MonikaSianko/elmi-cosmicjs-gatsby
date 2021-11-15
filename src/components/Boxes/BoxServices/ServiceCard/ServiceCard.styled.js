import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  spaces,
} from "../../../../constants/contants"
import { card } from "../../../Shared/Styles/Generic.styles"

export const StyledServiceCard = styled.div`
  padding: 4em;
  margin-bottom: 4em;
  background-color: ${colors.white};
  position: relative;
  ${card}
  .service-box {
    display: flex;
    > img {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      max-width: 30%;
    }
  }
  .text-box {
    width: 65%;
    padding-bottom: ${spaces.m};
    h4 {
      font-size: ${fontSize.l};
      text-transform: uppercase;
      color: ${colors.primaryBlue};
      font-weight: ${fontWeight.medium};
      padding-bottom: ${spaces.xl};
    }
  }
  .features-box {
    bottom: 4em;
    display: flex;
    justify-content: ${props =>
      props.layoutHorizontal ? "flex-start" : "space-between"};
    flex-wrap: ${props => (props.layoutHorizontal ? "wrap" : "")};
    width: ${props => (props.layoutHorizontal ? "95%" : "85%")};
  }
  @media ${breakpointsMax.l} {
    flex-direction: column;
    .service-box > img {
      display: none;
    }
    .text-box {
      width: 100%;
    }
    .features-box {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`
