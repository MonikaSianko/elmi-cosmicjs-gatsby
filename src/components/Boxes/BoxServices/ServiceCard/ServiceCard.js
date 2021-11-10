import React from "react"
import { memo } from "react"
import Description from "../../../Shared/Description/Description"
import FeatureCard from "../FeatureCard/FeatureCard"
import { StyledServiceCard } from "./ServiceCard.styled"

const ServiceCard = ({ data }) => {
  const { description, image, image_alt, title, features, id } = data

  return (
    <StyledServiceCard id={id} layoutHorizontal={features.layout_horizontal}>
      <Description
        title={title}
        description={description}
        src={image.imgix_url}
        alt={image_alt}
        className="service-box"
      />
      {features.details.length > 0 && (
        <div className="features-box">
          {features.details.map((feature, i) => (
            <FeatureCard
              key={i}
              features={features}
              feature={feature}
              layoutHorizontal={features.layout_horizontal}
              number={i + 1}
            />
          ))}
        </div>
      )}
    </StyledServiceCard>
  )
}

export default memo(ServiceCard)
