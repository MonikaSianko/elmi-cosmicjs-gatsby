import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

import { Headline } from "../../GlobalStyles/globalStyles"
import { MapBox } from "./styles"

import map from "../../../assets/map.jpg"

function Map() {
  const intl = useIntl()
  return (
    <MapBox>
      <Headline>{intl.formatMessage({ id: "contact-us" })}</Headline>
      <img src={map} alt="map"></img>
    </MapBox>
  )
}

export default Map
