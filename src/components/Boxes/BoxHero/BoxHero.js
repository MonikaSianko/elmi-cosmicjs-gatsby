import * as React from "react"
import { StyledHeroWrapper } from "./BoxHero.styled"
import ButtonsBox from "../../Shared/Buttons/ButtonsBox"

import BoxIndustries from "../BoxIndustries/BoxIndustries"
import { GenericWrapper } from "../../Shared/Styles/Generic.styles"
import { breakpointsMax } from "../../../constants/contants"
import { useMediaQuery } from "react-responsive"

export default function Hero({ heroData, industriesData }) {
  const {
    primary_btn_link,
    primary_btn_text,
    secondary_text,
    primary_text,
    secondary_btn_link,
    secondary_btn_text,
    image,
    description,
    image_alt,
  } = heroData

  const isTablet = useMediaQuery({ query: breakpointsMax.m })
  return (
    <StyledHeroWrapper>
      <GenericWrapper className="generic-wrapper">
        {!isTablet && (
          <img
            src={image.imgix_url}
            alt={image_alt}
            className="hero-image-desktop"
          />
        )}
        <div className="content-box">
          <div className="text">
            <h1>{primary_text}</h1>
            <h3>{secondary_text}</h3>
            {isTablet && (
              <div className="hero-image-mobile-wrapper">
                <img
                  src={image.imgix_url}
                  alt={image_alt}
                  className="hero-image-mobile"
                />
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="description"
            ></div>
          </div>
          <ButtonsBox
            primary_href={primary_btn_link}
            primary_text={primary_btn_text}
            secondary_href={secondary_btn_link}
            secondary_text={secondary_btn_text}
          />
        </div>
        {!isTablet && <BoxIndustries industriesData={industriesData} />}
      </GenericWrapper>
    </StyledHeroWrapper>
  )
}
