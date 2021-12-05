import styled from "styled-components"
import {
  borders,
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  radius,
  spaces,
} from "../../../constants/contants"
import { card } from "../Styles/Generic.styles"

export const StyledNavigationWrapper = styled.div`
  padding: ${props => (props.theme === "grey" ? "85px 0" : "125px 0 85px 0")};
  background-color: ${props =>
    props.theme === "grey" ? `${colors.lightGrey}` : `${colors.white}`};
  border-bottom: ${props => (props.border ? `${borders.blue}` : "")};
  .generic-wrapper {
    display: flex;
    align-items: center;
    justify-content: ${props =>
      props.layout ? `${props.layout}` : "space-between"};
    @media ${breakpointsMax.m} {
      flex-direction: column;
    }
  }
`

export const Card = styled.div`
  ${card}
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spaces.xxl};
  margin: 0 ${spaces.xl};
  width: 15em;
  text-align: center;
  cursor: pointer;
  :nth-of-type(2) {
    @media ${breakpointsMax.l} {
      margin: ${spaces.m} 0;
    }
  }
  h5 {
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.medium};
    color: ${colors.text};
    padding: ${spaces.s} 0;
  }
  img {
    width: 9em;
    height: 9em;
  }
  .with-text {
    border: ${borders.blue};
    border-radius: ${radius.button};
    padding: ${spaces.xxs} ${spaces.xs};
    color: ${colors.primaryBlue};
  }
`
