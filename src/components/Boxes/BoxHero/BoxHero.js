import * as React from "react"
import { StyledHeroWrapper } from "./BoxHero.styled"
import ButtonsBox from "../../Shared/Buttons/ButtonsBox"
import { GenericWrapper } from "../../Generic/Generic.styles"
import BoxIndustries from "../BoxIndustries/BoxIndustries"

export default function Hero({ data, industries }) {
  const {
    primary_btn_link,
    primary_btn_text,
    secondary_text,
    primary_text,
    secondary_btn_link,
    secondary_btn_text,
    image,
  } = data

  return (
    <StyledHeroWrapper>
      <GenericWrapper className="generic-wrapper">
        <img src={image.imgix_url} className="hero-image" />
        <div className="content-box">
          <div className="text">
            <h1>{primary_text}</h1>
            <h3>{secondary_text}</h3>
          </div>
          <ButtonsBox
            primary_href={primary_btn_link}
            primary_text={primary_btn_text}
            secondary_href={secondary_btn_link}
            secondary_text={secondary_btn_text}
          />
        </div>
        <BoxIndustries data={industries} />
      </GenericWrapper>
    </StyledHeroWrapper>
  )
}
