import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2em 0;
  @media ${breakpoints.mdMin} {
    width: 50%;
    padding-top: 4em;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    width: 100%;
  }
  input,
  textarea {
    border: ${palette.borderDarkGrey};
    border-radius: 0.5rem;
    margin-top: 0.5em;
    padding: 0.5em;
    :focus {
      outline: none;
      border: ${palette.borderBlue};
    }
  }
  input {
    height: 2em;
  }
  textarea {
    margin-bottom: 1em;
  }
`
