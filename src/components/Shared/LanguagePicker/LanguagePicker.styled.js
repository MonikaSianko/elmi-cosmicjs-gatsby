import styled from "styled-components"
import { colors, radius, shadows, spaces } from "../../../constants/contants"

export const StyledLanguagePicker = styled.div`
  position: relative;
  .arrow {
    width: 20px;
    height: 20px;
    cursor: pointer;
    ${props => (props.isOpen ? "transform: rotate(180deg);" : "")}
  }
  .globe {
    width: 20px;
    height: 20px;
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
    a {
      padding: ${spaces.xs} ${spaces.xs};
      :hover {
        background-color: ${colors.lightBlue};
      }
    }
  }
`
