import React from "react"
import { graphql } from "gatsby"
import "../components/reset.css"

import Header from "../components/Shared/Menu/Header"
import Hero from "../components/Boxes/BoxHero/BoxHero"
import Navigation from "../components/Shared/Navigation/Navigation"
import Specialization from "../components/Boxes/BoxSpecialization/BoxSpecialization"
import Contact from "../components/Boxes/BoxContact/BoxContact"
import Footer from "../components/Shared/Footer/Footer"

export default function HomePage({ data }) {
  const variables = data.allCosmicjsGlobalVariables.nodes[0]
  const hero = data.allCosmicjsHome.nodes[0].metadata.section_hero
  const industries =
    data.allCosmicjsHome.nodes[0].metadata.section_industries.data
  const findOutMore =
    data.allCosmicjsHome.nodes[0].metadata.section_find_out_more.data
  const specialization =
    data.allCosmicjsHome.nodes[0].metadata.section_specialization
  const contact = data.allCosmicjsHome.nodes[0].metadata.section_contact.data[0]

  return (
    <>
      <Header variables={variables} />
      <Hero data={hero} industries={industries} />
      <Navigation data={findOutMore} />
      <Specialization data={specialization} />
      <Contact data={contact} />
      <Footer variables={variables} />
    </>
  )
}

export const query = graphql`
  query MyQuery($language: String) {
    allCosmicjsHome(filter: { locale: { eq: $language } }) {
      nodes {
        locale
        metadata {
          section_hero {
            primary_btn_link
            primary_btn_text
            primary_text
            secondary_btn_link
            secondary_btn_text
            secondary_text
            description
            image {
              imgix_url
            }
          }
          section_industries {
            data {
              icon
              title
            }
          }
          section_find_out_more {
            data {
              btnLink
              btnText
              icon
              title
              id
            }
          }
          section_specialization {
            description

            image {
              alt
              url
            }
          }
          section_contact {
            data {
              address
              email_icon
              email
              email_text
              localization_icon
              map_url
              name_text
              phone
              phone_icon
              send
              your_message
            }
          }
        }
      }
    }
    allCosmicjsGlobalVariables(filter: { locale: { eq: $language } }) {
      nodes {
        metadata {
          header_links {
            id
            href
            text
          }
          footer_links {
            id
            href
            text
            icon
          }
          logo {
            imgix_url
          }
        }
        locale
      }
    }
  }
`
