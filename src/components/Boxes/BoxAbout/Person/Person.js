import React, { memo } from "react"
import { StyledPerson } from "./Person.styled"

const Person = ({ personData }) => {
  const { name_and_surname, position, bio, image } = personData.metadata
  return (
    <StyledPerson>
      <img src={image.imgix_url} alt={name_and_surname} />
      <div className="title">
        <h4>{name_and_surname}</h4>
        <h5>{position}</h5>
      </div>
      <div dangerouslySetInnerHTML={{ __html: bio }} className="bio"></div>
    </StyledPerson>
  )
}

export default memo(Person)
