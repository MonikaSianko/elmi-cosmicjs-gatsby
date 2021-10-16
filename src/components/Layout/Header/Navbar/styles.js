import styled from "styled-components"
import { breakpoints } from "../../../utils/breakpoints"

export const NavbarBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  overflow: hidden;
  padding-top: 5px;
  @media ${breakpoints.lgMin} {
    flex-direction: row;
  }
  ul {
    display: flex;
    @media ${breakpoints.md} {
      position: absolute;
      padding-top: 20px;
      top: 60px;
      left: 0;
      width: 100%;
      padding-top: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      background-color: white;
      padding-bottom: 30px;
    }
    @media ${breakpoints.lgMin} {
      padding-right: 10px;
      align-items: center;
    }
  }
  li {
    display: inline;
    margin: 0;
    @media ${breakpoints.md} {
      padding: 10px 5px;
      text-align: center;
    }
    @media ${breakpoints.lgMin} {
      padding: 0 20px 0 0;
    }
  }
`
