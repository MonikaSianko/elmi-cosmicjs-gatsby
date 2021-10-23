import React from "react"
import Slider from "react-slick"
import { GenericWrapper } from "../Generic/Generic.styles"
import { StyledSlickSlider } from "./SlickSlider.styled"

export default function SlickSlider({
  settings,
  content,
  className,
  withTitle,
}) {
  console.log(content)
  return (
    <StyledSlickSlider>
      <GenericWrapper>
        <Slider {...settings} className={className}>
          {content.map(el => (
            <div key={el.id} className="box">
              <img src={el.icon} alt={el.title} className="icon" />
              {withTitle && <div className="text">{el.title}</div>}
            </div>
          ))}
        </Slider>
      </GenericWrapper>
    </StyledSlickSlider>
  )
}
