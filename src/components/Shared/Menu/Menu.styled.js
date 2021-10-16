import styled from "styled-components"
import { borders, colors, zIndex } from "../../../constants/contants"

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  border-bottom: ${borders.blue};
  z-index: ${zIndex.absolute};
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .logo {
    height: 50px;
    width: auto;
  }
  .navigation {
    display: flex;
    align-items: center;
    height: 100%;
    .menu-links {
      display: flex;
      align-items: center;
      height: 100%;
      li {
        padding: 0 0.8rem;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &:hover {
          background-color: ${colors.aliceBlue};
        }
        a {
          &:hover {
            color: ${colors.prussianBlue};
          }
        }
      }
    }
  }
`
export const StyledLanguagePicker = styled.div``
