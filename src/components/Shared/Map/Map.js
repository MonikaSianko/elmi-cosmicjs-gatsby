import React from "react"
import styled from "styled-components"
import { radius, shadows } from "../../../constants/contants"
import { GenericWrapper } from "../Generic/Generic.styles"

export default function Map() {
  return (
    <StyledMap>
      <GenericWrapper>
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Zeganska%2016,%20warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </GenericWrapper>
    </StyledMap>
  )
}

const StyledMap = styled.div`
  iframe {
    width: 100%;
    height: 300px;
    border-radius: ${radius.m};
    box-shadow: ${shadows.cardShadow};
  }
`
