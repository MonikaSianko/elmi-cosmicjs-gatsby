import React from "react"
import styled from "styled-components"
import { spaces } from "../../../constants/contants"
import { GenericWrapper } from "../Generic/Generic.styles"

const Heading = ({ title, short_text }) => {
  return (
    <StyledHeading className="heading">
      <GenericWrapper>
        <h2>{title}</h2>
        <p>{short_text}</p>
      </GenericWrapper>
    </StyledHeading>
  )
}

export default Heading
const StyledHeading = styled.div`
  h2 {
    padding-bottom: ${spaces.m};
  }
`
