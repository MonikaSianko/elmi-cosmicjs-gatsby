import React, { memo } from "react"
import { StyledFeatureCard } from "./FeatureCard.styled"

const FeautreCard = ({ features, feature, layoutHorizontal, number }) => {
  return (
    <StyledFeatureCard layoutHorizontal={layoutHorizontal}>
      {features.with_numbers && <div className="number">{number}</div>}
      <p>{feature.title}</p>
      <img src={feature.image.imgix_url} alt={feature.image_alt} />
    </StyledFeatureCard>
  )
}

export default memo(FeautreCard)
