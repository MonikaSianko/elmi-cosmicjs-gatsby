import React from "react"
import { StyledSpecializationWrapper } from "./BoxSpecialization.styled"
import { GenericWrapper } from "../../Generic/Generic.styles"

const Specialization = ({ data }) => {
  const { description, image } = data
  return (
    <GenericWrapper>
      <StyledSpecializationWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-box"
        ></div>
        <img src={image.url} alt={image.alt}></img>
      </StyledSpecializationWrapper>
    </GenericWrapper>
  )
}

export default Specialization
