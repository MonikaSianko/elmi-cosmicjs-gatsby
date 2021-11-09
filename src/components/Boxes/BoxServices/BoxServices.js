import React from "react"
import { memo } from "react"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import { StyledServicesWrapper } from "./BoxServices.styled"
import ServiceCard from "./ServiceCard/ServiceCard"

const BoxServices = ({ servicesContent }) => {
  console.log(servicesContent)
  return (
    <StyledServicesWrapper>
      <GenericWrapper className="generic-wrapper">
        {servicesContent.map((el, i) => {
          return (
            <>
              <ServiceCard key={i} data={el.metadata} />
            </>
          )
        })}
      </GenericWrapper>
    </StyledServicesWrapper>
  )
}

export default memo(BoxServices)
