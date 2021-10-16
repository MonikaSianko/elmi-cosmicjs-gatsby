import React, { useEffect } from "react"
import { useMediaQuery } from "react-responsive"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
//helpers
import { breakpoints } from "../../utils/breakpoints"
//styled components
import { Container } from "../../GlobalStyles/globalStyles"
import { AboutText, Wrapper, ImageAbout, AboutBox } from "./AboutStyles"
import ButtonsBox from "../../GlobalStyles/Buttons/ButtonsBox"

function About({
  title,
  description,
  buttonPrimaryText,
  buttonPrimaryLink,
  buttonSecondaryText,
  buttonSecondaryLink,
}) {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  const isSm = useMediaQuery({ query: `${breakpoints.sm}` })
  const isMdMin = useMediaQuery({ query: `${breakpoints.mdMin}` })
  return (
    <Wrapper>
      <Container style={{ overflow: "hidden" }}>
        <AboutBox
          data-aos="slide-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div>
            <AboutText>
              <h2>{title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></p>
            </AboutText>
            <ButtonsBox
              primary_href={buttonPrimaryLink}
              primary_text={buttonPrimaryText}
              secondary_href={buttonSecondaryLink}
              secondary_text={buttonSecondaryText}
            />
          </div>
          {isMdMin ? <ImageAbout /> : null}
        </AboutBox>
      </Container>
      {isSm ? <ImageAbout /> : null}
    </Wrapper>
  )
}

export default About
