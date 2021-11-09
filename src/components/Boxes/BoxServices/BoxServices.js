import React from "react"
import { memo } from "react"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import Navigation from "../../Shared/Navigation/Navigation"
import { StyledServicesWrapper } from "./BoxServices.styled"
import ServiceCard from "./ServiceCard/ServiceCard"

const BoxServices = ({ servicesContent }) => {
  console.log(servicesContent)
  return (
    <StyledServicesWrapper>
      <GenericWrapper className="generic-wrapper">
        {servicesContent.map((el, index) => {
          return (
            <>
              <ServiceCard key={index} data={el.metadata} />
            </>
          )
        })}
      </GenericWrapper>
    </StyledServicesWrapper>
  )
}

export default memo(BoxServices)
