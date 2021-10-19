import React from "react"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import { StyledSpecializationWrapper } from "./BoxSpecialization.styled"

const Specialization = ({ data }) => {
  const { description, plain_text, image } = data
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
