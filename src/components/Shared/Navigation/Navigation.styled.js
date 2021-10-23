import styled from "styled-components"
import {
  borders,
  colors,
  fontSize,
  fontWeight,
  radius,
  shadows,
  spaces,
} from "../../../constants/contants"
import { FiArrowDownCircle } from "react-icons/fi"
import { primaryBlue } from "../../utils/styles"

export const StyledNavigationWrapper = styled.div`
  padding: 85px 0;
  background-color: ${colors.lightGrey};
  .generic-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
`

export const Card = styled.div`
  background-color: white;
  box-shadow: ${shadows.boxShadow};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${radius.m};
  padding: ${spaces.xxl} ${spaces.xxl};
  margin: 0 ${spaces.xl};
  width: 15em;
  text-align: center;
  cursor: pointer;
  h5 {
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.medium};
    color: ${colors.text};
    padding: ${spaces.s} 0;
  }
  img {
    width: 8em;
    height: 8em;
  }
  .with-text {
    border: ${borders.blue};
    border-radius: ${radius.button};
    padding: ${spaces.xxs} ${spaces.xs};
    color: ${colors.primaryBlue};
  }
`

export const ArrowDown = styled(FiArrowDownCircle)`
  color: ${colors.primaryBlue};
  width: 2.5em;
  height: 2.5em;
  margin-top: 1.5em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`
