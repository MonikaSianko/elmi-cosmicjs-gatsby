import React, { useEffect } from "react"
//localization
import { useIntl } from "gatsby-plugin-react-intl"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
// styled components
import { Container } from "../../GlobalStyles/globalStyles"
import { Wrapper, OfferBox, Card } from "./OfferStyles"
//icons
import services from "../../../assets/services.svg"
import products from "../../../assets/products.svg"
import prototypes from "../../../assets/prototypes.svg"

function Offer() {
  const intl = useIntl()
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <Wrapper>
      <Container
        data-aos="slide-right"
        data-aos-anchor-placement="center-bottom"
      >
        <h2>{intl.formatMessage({ id: "our-offer" })}</h2>
        <OfferBox>
          <Card>
            <img
              src={services}
              alt={intl.formatMessage({ id: "services" })}
            ></img>
            <p>{intl.formatMessage({ id: "services" })}</p>
            <a href={intl.formatMessage({ id: "modernization_link" })}>
              {intl.formatMessage({ id: "find-out-more" })}
            </a>
          </Card>
          <Card>
            <img
              src={products}
              alt={intl.formatMessage({ id: "products" })}
            ></img>
            <p>{intl.formatMessage({ id: "products" })}</p>
            <a href={intl.formatMessage({ id: "products_link" })}>
              {intl.formatMessage({ id: "find-out-more" })}
            </a>
          </Card>
          <Card>
            <img
              src={prototypes}
              alt={intl.formatMessage({ id: "prototypes" })}
            ></img>
            <p>{intl.formatMessage({ id: "prototypes" })}</p>
            <a href={intl.formatMessage({ id: "prototypes_link" })}>
              {intl.formatMessage({ id: "find-out-more" })}
            </a>
          </Card>
        </OfferBox>
      </Container>
    </Wrapper>
  )
}

export default Offer
