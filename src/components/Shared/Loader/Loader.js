import React from "react"
import styled from "styled-components"
import { fadeOut, spin } from "../Styles/Keyframes.styles"
import { colors } from "../../../constants/contants"

const Loader = ({ classNames }) => {
  return (
    <StyledLoader>
      <div className={classNames}></div>
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
    animation: ${spin} 2s linear infinite;
  }
  .hide-loader {
    animation: ${fadeOut} 1s cubic-bezier(0.5, 0.46, 0.45, 0.94) forwards;
  }
`
