import React, { memo, useState } from "react"
import { StyledIndustries } from "./BoxIndustries.styled"

const BoxIndustries = ({ industriesData }) => {
  return (
    <StyledIndustries className="industries-wrapper">
      {industriesData.map(el => (
        <div className="industry-box" key={el.id}>
          <img src={el.icon.imgix_url} alt={el.title} />
          <div>{el.title}</div>
        </div>
      ))}
    </StyledIndustries>
  )
}

export default memo(BoxIndustries)
