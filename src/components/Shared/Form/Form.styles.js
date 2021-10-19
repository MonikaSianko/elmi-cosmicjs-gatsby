import styled from "styled-components"
import { fontSize, radius, spaces } from "../../../constants/contants"
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;

  div {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    width: 100%;
  }
  input,
  textarea {
    border: ${palette.borderDarkGrey};
    border-radius: ${radius.s};
    padding: ${spaces.xs};
    :focus {
      outline: none;
      border: ${palette.borderBlue};
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
  }
`
