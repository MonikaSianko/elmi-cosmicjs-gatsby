import React, { memo, useState } from "react"
import { StyledIndustries } from "./BoxIndustries.styled"

const BoxIndustries = ({ data }) => {
  return (
    <StyledIndustries className="industries-wrapper">
      {data.map(el => (
        <div className="industry-box" key={el.id}>
          <img src={el.icon} alt={el.title} />
          <div>{el.title}</div>
        </div>
      ))}
    </StyledIndustries>
  )
}

export default memo(BoxIndustries)
