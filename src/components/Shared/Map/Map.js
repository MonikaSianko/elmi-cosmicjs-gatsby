import React from "react"
import GoogleMapReact from "google-map-react"
import { lat, lng } from "../../../helpers/helpers"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function Map() {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 16,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
