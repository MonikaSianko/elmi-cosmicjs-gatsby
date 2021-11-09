import styled from "styled-components"
import {
  breakpointsMax,
  fontSize,
  radius,
  spaces,
  borders,
} from "../../../constants/contants"

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  @media ${breakpointsMax.m} {
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    width: 100%;
  }
  input,
  textarea {
    border: ${borders.darkGrey};
    border-radius: ${radius.s};
    padding: ${spaces.xs};
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
