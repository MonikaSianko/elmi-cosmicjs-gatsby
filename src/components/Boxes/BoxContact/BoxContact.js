import React from "react"
import ContactInfo from "../../Shared/ContactInfo/ContactInfo"
import Form from "../../Shared/Form/Form"
import { GenericWrapper } from "../../Shared/Styles/Generic.styles"
import Heading from "../../Shared/Heading/Heading"
import Map from "../../Shared/Map/Map"
import { StyledContactWrapper } from "./BoxContact.styled"

function BoxContact({ contactData }) {
  const { messages, image } = contactData
  const { title, short_text } = contactData.contact_details.metadata.messages

  return (
    <StyledContactWrapper>
      <Heading title={title} short_text={short_text} />
      <GenericWrapper>
        <div className="upper-row">
          <img src={image.imgix_url} alt={title} />
          <Form messages={messages} />
        </div>
      </GenericWrapper>
      <ContactInfo contactInfo={contactData.contact_details.metadata} />
      <Map />
    </StyledContactWrapper>
  )
}

export default BoxContact
