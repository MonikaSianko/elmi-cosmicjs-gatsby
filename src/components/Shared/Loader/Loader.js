import React from "react"
import styled from "styled-components"
import { fadeIn, spin } from "../Styles/Keyframes.styles"
import { colors } from "../../../constants/contants"

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  )
}

export default Loader

const StyledLoader = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    border: 10px solid ${colors.loaderGrey}; /* Light grey */
    border-top: 10px solid ${colors.primaryBlue};
    border-bottom: 10px solid ${colors.primaryBlue}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite, ${fadeIn} 2s ease-in;
  }
`
