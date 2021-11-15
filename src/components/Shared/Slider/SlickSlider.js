import React from "react"
import Slider from "react-slick"
import { GenericWrapper } from "../Styles/Generic.styles"
import { StyledSlickSlider } from "./SlickSlider.styled"

export default function SlickSlider({
  settings,
  content,
  className,
  withTitle,
}) {
  return (
    <StyledSlickSlider>
      <GenericWrapper>
        <Slider {...settings} className={className}>
          {content.map((el, i) => (
            <div key={i} className="box">
              <img src={el.icon.imgix_url} alt={el.title} className="icon" />
              {withTitle && <div className="text">{el.title}</div>}
            </div>
          ))}
        </Slider>
      </GenericWrapper>
    </StyledSlickSlider>
  )
}
