import styled, { css } from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  fontWeight,
  radius,
  spaces,
} from "../../../../constants/contants"
import { card } from "../../../Shared/Generic/Generic.styles"

const verticalCard = css`
  flex-direction: column-reverse;
  justify-content: center;
  width: 180px;
  height: 180px;
`

const horizontalCard = css`
  width: 250px;
  margin: 0 2em 2em 2em;
  padding: 1em 2em;
  justify-content: space-between;
  img {
    padding-left: 1em;
  }
`

export const StyledServiceCard = styled.div`
  position: relative;
  padding-left: 4em;
  margin-bottom: 4em;
  background-color: ${colors.white};
  .service-box {
    display: flex;
  }
  @media ${breakpointsMax.l} {
    flex-direction: column;
    .service-box > img {
      display: none;
    }
  }
  .text-box {
    padding: 4em 4em 4em 0;
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
    position: absolute;
    display: flex;
    justify-content: ${props =>
      props.layoutHorizontal ? "flex-start" : "space-between"};
    flex-wrap: ${props => (props.layoutHorizontal ? "wrap" : "")};
    width: ${props => (props.layoutHorizontal ? "95%" : "85%")};
    @media ${breakpointsMax.l} {
      flex-wrap: wrap;
      justify-content: center;
      position: initial;
    }
    .feature {
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
      }

      @media ${breakpointsMax.l} {
        margin: 2em;
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
    }
  }
`
