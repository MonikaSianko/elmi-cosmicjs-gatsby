import React from "react"
import { memo } from "react"
import Description from "../../../Shared/Description/Description"
import { StyledServiceCard } from "./ServiceCard.styled"

const ServiceCard = ({ data }) => {
  const { description, image, image_alt, title, features, id } = data

  return (
    <StyledServiceCard layoutHorizontal={features.layout_horizontal} id={id}>
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
            <div className="feature" key={i}>
              {features.with_numbers && <div className="number">{i + 1}</div>}
              <p>{feature.title}</p>
              <img src={feature.image.imgix_url} alt={feature.image_alt} />
            </div>
          ))}
        </div>
      )}
    </StyledServiceCard>
  )
}

export default memo(ServiceCard)
