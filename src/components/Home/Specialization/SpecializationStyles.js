import styled from "styled-components"

//helpers
import { breakpoints } from "../../utils/breakpoints"
import * as palette from "../../utils/styles"

export const SpecializationBox = styled.div`
  @media ${breakpoints.lgMin} {
    display: flex;
    align-items: center;
    padding: 3em 0;
  }
  @media ${breakpoints.md} {
    padding: 5em 0;
  }
  img {
    width: 50%;
    height: 100%;
    right: 0;
    clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0 100%);
    @media ${breakpoints.md} {
      display: none;
    }
  }
`

export const TextBox = styled.div`
  strong {
    color: ${palette.primaryBlue};
  }
  @media ${breakpoints.lgMin} {
    margin: 50px 0;
    border-left: 10px solid ${palette.primaryBlue};
    width: 50%;
    padding-left: 1.5em;
    :first-of-type {
      padding-bottom: 2em;
    }
  }

  @media ${breakpoints.md} {
    display: flex;
    div {
      padding: 1em 0;
      :first-of-type {
        padding-right: 2em;
        border-right: 3px solid ${palette.primaryBlue};
      }
      :last-of-type {
        padding-left: 2em;
      }
    }
  }

  @media ${breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      :first-of-type {
        border: 0;
        padding: 0;
        border-bottom: 3px solid ${palette.primaryBlue};
        padding-bottom: 2em;
      }
      :last-of-type {
        border: 0;
        padding: 0;
        padding-top: 2em;
      }
    }
  }
`
