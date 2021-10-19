import React from "react"

import Form from "../../Shared/Form/Form"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import { StyledContactWrapper } from "./BoxContact.styled"

function Contact({ data }) {
  const {
    map_url,
    email,
    phone,
    address,
    localization_icon,
    phone_icon,
    email_icon,
  } = data
  console.log(localization_icon)
  return (
    <StyledContactWrapper>
      <GenericWrapper>
        <div className="upper-row">
          <img src={map_url} alt="map" />
          <Form data={data} />
        </div>
        <div className="contact-info">
          <div>
            <img src={localization_icon} alt="localization-icon" />
            <p>{address}</p>
          </div>
          <div>
            <img src={phone_icon} alt="phone" />
            <p>{phone}</p>
          </div>
          <div>
            <img src={email_icon} alt="email" />
            <p>{email}</p>
          </div>
        </div>
      </GenericWrapper>
    </StyledContactWrapper>
  )
}

export default Contact
