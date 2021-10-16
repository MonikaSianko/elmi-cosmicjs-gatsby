import styled from "styled-components"
import * as palette from "../utils/styles"

export const LayoutWrapper = styled.body`
  background-color: ${props =>
    props.color === "grey" ? `${palette.bgGrey}` : "white"};
`
