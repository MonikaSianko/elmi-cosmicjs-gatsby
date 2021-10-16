import styled from "styled-components"

import * as palette from "../utils/styles"

export const ProductsWrapper = styled.div`
  background-color: ${palette.bgGrey};
  padding: 4em 0;
`
export const Box = styled.div`
  background-color: white;
  box-shadow: ${palette.cardShadow};
  border-radius: 0.5rem;
  padding: 2em;
`

export const ProductBox = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${palette.borderGrey};
  margin-bottom: 2em;
  padding: 2em;
`
