import React from "react"
import { GenericWrapper } from "../../Shared/Styles/Generic.styles"
import { StyledSpecializationWrapper } from "./BoxSpecialization.styled"

const Specialization = ({ specializationData }) => {
  const { description, image, image_alt } = specializationData

  return (
    <GenericWrapper>
      <StyledSpecializationWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-box"
        ></div>
        <img src={image.imgix_url} alt={image_alt}></img>
      </StyledSpecializationWrapper>
    </GenericWrapper>
  )
}

export default Specialization
