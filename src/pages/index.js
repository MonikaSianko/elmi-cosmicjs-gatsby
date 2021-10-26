import React from "react"
import { graphql } from "gatsby"
import "../components/reset.css"

import Header from "../components/Shared/Menu/Header"
import Hero from "../components/Boxes/BoxHero/BoxHero"
import Navigation from "../components/Shared/Navigation/Navigation"
import Specialization from "../components/Boxes/BoxSpecialization/BoxSpecialization"
import Contact from "../components/Boxes/BoxContact/BoxContact"
import Footer from "../components/Shared/Footer/Footer"
import SlickSlider from "../components/Shared/Slider/SlickSlider"
import { useMediaQuery } from "react-responsive"
import { breakpointsMax } from "../constants/contants"

export default function HomePage({ data }) {
  const global_variables = data.allCosmicjsGlobalVariables.nodes[0].metadata
  const hero = data.allCosmicjsHome.nodes[0].metadata.section_hero
  const industries =
    data.allCosmicjsHome.nodes[0].metadata.section_industries.data
  const findOutMore =
    data.allCosmicjsHome.nodes[0].metadata.section_find_out_more.data
  const specialization =
    data.allCosmicjsHome.nodes[0].metadata.section_specialization
  const contact = data.allCosmicjsHome.nodes[0].metadata.section_contact.data[0]
  const partners_slider =
    data.allCosmicjsHome.nodes[0].metadata.partners_slider.metadata.partners

  const isMobile = useMediaQuery({ query: breakpointsMax.s })
  const isTablet = useMediaQuery({ query: breakpointsMax.m })
  console.log(partners_slider)
  return (
    <>
      <Header data={global_variables} />
      <Hero data={hero} industries={industries} />
      {isTablet && (
        <SlickSlider
          content={industries}
          settings={{
            dots: false,
            infinite: true,
            slidesToShow: isMobile ? 2 : 3,
            slidesToScroll: 2,
            centerMode: true,
            autoplay: true,
            speed: 600,
          }}
          className="industries"
          withTitle
        />
      )}
      <Navigation data={findOutMore} />
      <Specialization data={specialization} />
      <SlickSlider
        settings={{
          dots: true,
          infinite: true,
          slidesToShow: isTablet ? 1 : 3,
          slidesToScroll: 2,
          centerMode: true,
          autoplay: true,
          speed: 400,
        }}
        content={partners_slider}
        className="partners"
      />
      <Contact data={contact} />
      <Footer data={global_variables} />
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
          partners_slider {
            metadata {
              partners {
                icon
                id
                title
              }
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
          menu_links {
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
