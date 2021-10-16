import React, { useEffect } from "react"
//helpers
import { useIntl } from "gatsby-plugin-react-intl"
import { useMediaQuery } from "react-responsive"
//styled components
import { Container } from "../../GlobalStyles/globalStyles"
import { FooterLink, FooterBox, FooterWrapper } from "./styles"
import { breakpoints } from "../../utils/breakpoints"
//icons
import aboutNav from "../../../assets/aboutNav.svg"
import contactNav from "../../../assets/contactNav.svg"
import servicesNav from "../../../assets/servicesNav.svg"
import productsNav from "../../../assets/productsNav.svg"
import homeNav from "../../../assets/homeNav.svg"

export default function Footer() {
  const intl = useIntl()

  return (
    <FooterWrapper>
      <Container>
        <FooterBox>
          <ul>
            <li>
              <img src={homeNav} alt={intl.formatMessage({ id: "home" })} />
              <FooterLink to={intl.formatMessage({ id: "home_link" })}>
                {intl.formatMessage({ id: "home" })}
              </FooterLink>
            </li>
            <li>
              <img
                src={productsNav}
                alt={intl.formatMessage({ id: "products" })}
              />
              <FooterLink to={intl.formatMessage({ id: "products_link" })}>
                {intl.formatMessage({ id: "products" })}
              </FooterLink>
            </li>
            <li>
              <img
                src={servicesNav}
                alt={intl.formatMessage({ id: "services" })}
              />
              <FooterLink to={intl.formatMessage({ id: "services_link" })}>
                {intl.formatMessage({ id: "services" })}
              </FooterLink>
            </li>
            {/* <li>
            <img src={homeNav} alt={intl.formatMessage({ id: "home" })} />
              <FooterLink to={intl.formatMessage({ id: "shop_link" })}>
                {intl.formatMessage({ id: "shop" })}
              </FooterLink>
            </li> */}

            <li>
              <img
                src={contactNav}
                alt={intl.formatMessage({ id: "contact" })}
              />
              <FooterLink to={intl.formatMessage({ id: "contact_link" })}>
                {intl.formatMessage({ id: "contact" })}
              </FooterLink>
            </li>
            <li>
              <img src={aboutNav} alt={intl.formatMessage({ id: "about" })} />
              <FooterLink to={intl.formatMessage({ id: "about_link" })}>
                {intl.formatMessage({ id: "about" })}
              </FooterLink>
            </li>
            {/* <li>
              <FooterLink
                to={intl.formatMessage({ id: "certifications_link" })}
              >
                {intl.formatMessage({ id: "certifications" })}
              </FooterLink>
            </li> */}
          </ul>
        </FooterBox>
      </Container>
    </FooterWrapper>
  )
}
