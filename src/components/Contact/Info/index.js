import React from "react"

import { InfoBox } from "./styles"
import location from "../../../assets/location.svg"
import telephone from "../../../assets/phone.svg"
import mail from "../../../assets/mail.svg"

function Info(phone, email, address) {
  return (
    <InfoBox data-aos="slide-down">
      <a href="#">
        <img src={location} alt="location"></img>
        {address}
      </a>
      <a href="#">
        <img src={telephone} alt="phone"></img>
        {phone}
      </a>
      <a href="#">
        <img src={mail} alt="email"></img>
        {email}
      </a>
    </InfoBox>
  )
}

export default Info
