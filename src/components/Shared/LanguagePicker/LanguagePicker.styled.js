import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  radius,
  shadows,
  spaces,
} from "../../../constants/contants"

export const StyledLanguagePicker = styled.div`
  position: relative;
  // until localization is introduced in cosmic
  display: none;

  .arrow {
    width: 30px;
    height: 30px;
    cursor: pointer;
    ${props => (props.isOpen ? "transform: rotate(180deg);" : "")}
  }
  .globe {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: ${spaces.s};
  }
  .dropdown {
    position: absolute;
    bottom: -100px;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    border-radius: ${radius.s};
    box-shadow: ${shadows.boxShadow};
    padding: ${spaces.xs} 0;

    li {
      padding: ${spaces.xs} ${spaces.xs};
      :hover {
        background-color: ${colors.lightBlue};
      }
    }
  }
  @media ${breakpointsMax.m} {
    .globe {
      width: 30px;
      height: 30px;
      margin-left: 20px;
    }
    .arrow {
      ${props =>
        props.isOpen
          ? "transform: rotate(90deg);"
          : "transform: rotate(-90deg)"}
    }
    .dropdown {
      box-shadow: none;
      left: 80px;
      bottom: -10px;
      flex-direction: row;
    }
  }
`
