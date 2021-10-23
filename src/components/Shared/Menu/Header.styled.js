import styled from "styled-components"
import {
  borders,
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  spaces,
  zIndex,
} from "../../../constants/contants"

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
    .menu-icon {
      width: 30px;
      height: 30px;
    }
    .generic-wrapper {
      position: relative;
    }
    .menu-open {
      height: 100vh;
      background-color: ${colors.whiteHue};
    }
    .navigation {
      position: absolute;
      bottom: -80px;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    }

    .menu-links {
      padding-bottom: ${spaces.m};
    }
  }
`
