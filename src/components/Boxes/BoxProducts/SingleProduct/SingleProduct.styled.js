import styled from "styled-components"
import {
  spaces,
  borders,
  radius,
  fontWeight,
  colors,
  breakpointsMax,
} from "../../../../constants/contants"
import {
  fadeIn,
  growDown,
  openSmoothly,
} from "../../../Shared/Styles/Keyframes.styles"

export const StyledSingleProduct = styled.div`
  padding: 1.5em;
  margin-bottom: ${spaces.xl};
  border: ${borders.lightGrey};
  border-radius: ${radius.s};
  animation: ${openSmoothly} 1s ease-in;
  h3 {
    text-transform: uppercase;
    font-weight: ${fontWeight.medium};
    color: ${props =>
      props.main ? `${colors.primaryBlue}` : `${colors.text}`};
  }
  .product-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arrow-up {
    display: flex;
    justify-content: flex-end;
  }
  svg {
    width: 30px;
    height: 30px;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    animation: ${fadeIn} 1s ease-in both;
    .description {
      padding: ${spaces.m} 0;
      padding-right: ${spaces.m};
    }
    img {
      width: 140px;
      height: 140px;
      object-fit: contain;
      margin-bottom: ${spaces.m};
    }

    @media ${breakpointsMax.m} {
      flex-direction: column;
      align-items: flex-start;
      .description {
        padding-right: 0;
      }
    }
  }
`
