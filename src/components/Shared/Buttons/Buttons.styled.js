import styled from "styled-components"
import { colors, radius } from "../../../constants/contants"

export const StyledButtonBox = styled.div`
  display: inline-block;
  .btn-secondary {
    background: none;
    border: 2px solid ${colors.primaryBlue};
    a {
      color: ${colors.primaryBlue};
    }
  }
`
export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: ${colors.buttonGradient};
  color: white;
  border-radius: ${radius.button};
  padding: 0.5em 2em;
  margin-right: 1em;
  :hover {
    border-radius: 0;
    transition: all 1s ease 0s;
  }
  a {
    color: ${colors.white};
  }
`
