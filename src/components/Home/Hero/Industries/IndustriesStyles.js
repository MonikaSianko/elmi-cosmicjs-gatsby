import styled from "styled-components"
import { breakpoints } from "../../../utils/breakpoints"
import * as palette from "../../../utils/styles"

export const IndustriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  @media ${breakpoints.lgMin} {
    width: 70%;
  }
  div {
    border-radius: 50%;
    background-color: ${palette.primaryBlue};
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${palette.boxShadow};
    margin-bottom: 10px;
    margin-right: 10px;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.8rem;
      text-transform: uppercase;
      text-align: center;
      color: white;
      margin-bottom: 5px;
    }
  }
`
