import React, { useEffect } from "react"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
//styled components
import { ServiceCard, DetailsCards, ServiceWrapper } from "./ServicesStyles"
import { Container } from "../GlobalStyles/globalStyles"

function Service({
  title,
  description,
  anchorTag,
  photo,
  photoTitle,
  details,
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <ServiceWrapper>
      <Container style={{ overflow: "hidden" }}>
        <ServiceCard id={anchorTag}>
          <div>
            <h3>{title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          </div>
          <img src={photo} alt={photoTitle}></img>
        </ServiceCard>
        {details !== null && (
          <DetailsCards data-aos="slide-up">
            {details.map((el, i) => (
              <div>
                <div>{i + 1}</div>
                <h3>{el.description}</h3>
                <img src={el.file.url} alt={el.title} />
              </div>
            ))}
          </DetailsCards>
        )}
      </Container>
    </ServiceWrapper>
  )
}

export default Service
