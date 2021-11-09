import React from "react"

import Form from "../../Shared/Form/Form"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import Map from "../../Shared/Map/Map"
import { StyledContactWrapper } from "./BoxContact.styled"

function Contact({ contactData, messages }) {
  return (
    <StyledContactWrapper>
      <GenericWrapper>
        <h2>{messages.contact_text}</h2>
        <div className="upper-row">
          <Map />
          <Form messages={messages} />
        </div>
        <div className="contact-info" id={contactData.id}>
          {contactData.means_of_contact.map((el, i) => (
            <div key={i}>
              <img src={el.icon.imgix_url} alt={el.type_text} />
              <p>{el.details_text}</p>
            </div>
          ))}
        </div>
      </GenericWrapper>
    </StyledContactWrapper>
  )
}

export default Contact
