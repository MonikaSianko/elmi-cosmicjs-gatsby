import React, { memo } from "react"
import Description from "../../Shared/Description/Description"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"
import { StyledBoxAbout } from "./BoxAbout.styled"
import Person from "./Person/Person"

const BoxAbout = ({ messages, aboutDescription, teamMembers }) => {
  const { title, description, image, image_alt } = aboutDescription
  return (
    <StyledBoxAbout>
      <GenericWrapper>
        <Description
          title={title}
          description={description}
          src={image.imgix_url}
          alt={image_alt}
          className="heading-description"
        />
      </GenericWrapper>

      <div className="team-members">
        <GenericWrapper>
          <h2>{messages.header_text}</h2>
          <div className="team-members-box">
            {teamMembers.map((el, i) => (
              <Person personData={el} key={i} />
            ))}
          </div>
        </GenericWrapper>
      </div>
    </StyledBoxAbout>
  )
}

export default memo(BoxAbout)
