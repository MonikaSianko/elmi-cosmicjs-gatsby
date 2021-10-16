import React, { useEffect } from "react"

//animations
import Aos from "aos"
import "aos/dist/aos.css"

//styled components
import { Container } from "../../GlobalStyles/globalStyles"
import { TextBox, SpecializationBox } from "./SpecializationStyles"

function Specialization({ firstText, secondText, image, imageTitle }) {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <Container>
      <SpecializationBox data-aos="slide-left">
        <TextBox
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-easing="ease-in"
          data-aos-anchor-placement="bottom"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: firstText,
            }}
          ></div>
          <div
            dangerouslySetInnerHTML={{
              __html: secondText,
            }}
          ></div>
        </TextBox>
        <img src={image} alt={imageTitle}></img>
      </SpecializationBox>
    </Container>
  )
}

export default Specialization
