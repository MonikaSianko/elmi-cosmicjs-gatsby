import styled, { css } from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  radius,
  spaces,
} from "../../../../constants/contants"
import { card } from "../../../Shared/Styles/Generic.styles"

const verticalCard = css`
  flex-direction: column-reverse;
  justify-content: center;
  width: 180px;
  height: 180px;
`

const horizontalCard = css`
  width: 230px;
  margin: 0 2em 2em 2em;
  padding: 1em 2em;
  justify-content: space-between;
  img {
    padding-left: 1em;
  }
`

export const StyledFeatureCard = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${card}
  ${props => {
    if (props.layoutHorizontal) {
      return `
            ${horizontalCard}
          `
    }
    return `
            ${verticalCard}
          `
  }}
      p {
    padding-top: ${props => (props.layoutHorizontal ? "" : `${spaces.xl}`)};
    line-height: 1.5em;
    font-size: ${fontSize.xs};
  }
  .number {
    position: absolute;
    left: -${spaces.s};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryBlue};
    color: ${colors.white};
    font-size: ${fontSize.xs};
    border-radius: ${radius.circle};
  }
  @media ${breakpointsMax.l} {
    margin: 2em;
  }
`
