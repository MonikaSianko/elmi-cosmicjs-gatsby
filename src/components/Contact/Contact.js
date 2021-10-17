import React from "react"

import { ContactBox, StyledContactWrapper } from "./ContactStyles"
import { Container } from "../GlobalStyles/globalStyles"

import Info from "./Info/index"
import Form from "./Form/index"
import Map from "./Map/index"

function Contact({ email, address, phone }) {
  return (
    <StyledContactWrapper style={{ overflow: "hidden" }}>
      <Container>
        <ContactBox>
          <Map />
          <Form />
        </ContactBox>
        <Info email={email} phone={phone} address={address} />
      </Container>
    </StyledContactWrapper>
  )
}

export default Contact
