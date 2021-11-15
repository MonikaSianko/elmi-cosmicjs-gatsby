import styled from "styled-components"
import {
  fontSize,
  radius,
  spaces,
  borders,
  shadows,
} from "../../../constants/contants"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    width: 100%;
  }
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
`
