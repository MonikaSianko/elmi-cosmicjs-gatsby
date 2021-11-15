import React, { memo } from "react"
import { GenericWrapper } from "../Styles/Generic.styles"
import Heading from "../Heading/Heading"
import { StyledContactInfo } from "./ContactInfo.styled"

const ContactInfo = ({ contactInfo }) => {
  const { title, short_text } = contactInfo.messages
  return (
    <StyledContactInfo id="contact-box" className="contact-info-wrapper">
      <Heading title={title} short_text={short_text} className="heading" />
      <GenericWrapper className="generic-wrapper">
        <div className="contact-info">
          {contactInfo.info.map((el, i) => (
            <div key={i}>
              <img src={el.icon.imgix_url} alt={el.type_text} />
              {el.id === "address" && <p>{el.details_text}</p>}
              {el.id === "email" && (
                <a href={`mailto:${el.details_text}`}>{el.details_text}</a>
              )}
              {el.id === "phone" && (
                <a href={`tel:${el.details_text}`}>{el.details_text}</a>
              )}
            </div>
          ))}
        </div>
      </GenericWrapper>
    </StyledContactInfo>
  )
}

export default memo(ContactInfo)
