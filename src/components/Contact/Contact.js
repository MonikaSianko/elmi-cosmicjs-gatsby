import React from "react"

import { ContactBox, ContactWrapper } from "./ContactStyles"
import { Container } from "../GlobalStyles/globalStyles"

import Info from "./Info/index"
import Form from "./Form/index"
import Map from "./Map/index"

function Contact({ email, address, phone }) {
  return (
    <ContactWrapper style={{ overflow: "hidden" }}>
      <Container>
        <ContactBox>
          <Map />
          <Form />
        </ContactBox>
        <Info email={email} phone={phone} address={address} />
      </Container>
    </ContactWrapper>
  )
}

export default Contact
