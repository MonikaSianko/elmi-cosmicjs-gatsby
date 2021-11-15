import styled from "styled-components"
import {
  borders,
  breakpointsMax,
  colors,
  spaces,
  zIndex,
} from "../../../constants/contants"
import { fadeOut } from "../Styles/Keyframes.styles"

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  border-bottom: ${borders.blue};
  z-index: ${zIndex.absolute};
  background-color: ${colors.white};
  .generic-wrapper {
    overflow: inherit;
  }
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
  }
  @media ${breakpointsMax.m} {
    ${props =>
      props.isMenuOpen
        ? `    background-color: ${colors.whiteHue};
    backdrop-filter: blur(3px);`
        : ""}

    .menu-icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      animation: ${fadeOut} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    .generic-wrapper {
      position: relative;
    }
    .menu-open {
      height: 100vh;
    }
    .navigation {
      position: absolute;
      bottom: -90px;
      right: 0;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .menu-links {
      padding-bottom: ${spaces.m};
    }
  }
`
