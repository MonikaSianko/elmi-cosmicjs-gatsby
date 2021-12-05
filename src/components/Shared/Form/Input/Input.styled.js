import styled from "styled-components"
import {
  borders,
  colors,
  fontSize,
  fontWeight,
  radius,
  shadows,
  spaces,
} from "../../../../constants/contants"

export const StyledInput = styled.div`
  input,
  textarea {
    border: none;
    border-radius: ${radius.s};
    padding: ${spaces.xs};
    box-shadow: ${shadows.cardShadow};
    :focus {
      outline: none;
      border: ${borders.blue};
    }
  }
  input {
    max-height: 40px;
    margin-top: ${spaces.xs};
  }
  textarea {
    margin-top: ${spaces.xs};
    margin-bottom: ${spaces.s};
    height: 80px;
  }
  label {
    font-size: ${fontSize.xs};
    text-transform: lowercase;
  }
  span {
    margin-top: 0.5em;
    padding: 0.5em;
    border-radius: ${radius.s};
    font-size: ${fontSize.xxs};
    font-weight: ${fontWeight.light};
  }
  .error {
    background-color: ${colors.lightRed};
    color: ${colors.red};
  }
  .success {
    background-color: ${colors.lightGreen};
    color: ${colors.green};
  }
`
