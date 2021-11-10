import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/Boxes/BoxHero/BoxHero"
import Navigation from "../components/Shared/Navigation/Navigation"
import Specialization from "../components/Boxes/BoxSpecialization/BoxSpecialization"
import SlickSlider from "../components/Shared/Slider/SlickSlider"
import { useMediaQuery } from "react-responsive"
import { breakpointsMax } from "../constants/contants"
import Layout from "../components/Shared/Layout/Layout"
import ContactInfo from "../components/Shared/ContactInfo/ContactInfo"

// guery filtered by locale
// query MyQuery($language: String) {
//   allCosmicjsAllPages(filter: { locale: { eq: $language } }) {

export default function HomePage({ data }) {
  // for all page queries
  const pagesData = data.allCosmicjsAllPages.nodes[0].metadata
  const globalData = pagesData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links
  // home page query
  const homeData = pagesData.home.metadata
  const heroData = homeData.hero.metadata
  const industriesData = homeData.industries.metadata.slider
  const navigationData = homeData.navigation.metadata
  const specializationData = homeData.specialization.metadata
  const partnersData = homeData.partners.metadata.slider
  const contactInfo = homeData.contact.metadata
  const isMobile = useMediaQuery({ query: breakpointsMax.s })
  const isTablet = useMediaQuery({ query: breakpointsMax.m })

  return (
    <Layout
      menuLinks={menuLinks}
      logo={logo}
      policy={globalData.privacy_policy.metadata}
    >
      <Hero heroData={heroData} industriesData={industriesData} />
      {isTablet && (
        <SlickSlider
          content={industriesData}
          settings={{
            dots: false,
            infinite: true,
            slidesToShow: isMobile ? 2 : 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            speed: 600,
          }}
          className="industries"
          withTitle
        />
      )}
      <Navigation navigationData={navigationData} theme="grey" />
      <Specialization specializationData={specializationData} />
      <SlickSlider
        settings={{
          dots: false,
          infinite: true,
          slidesToShow: isTablet ? 1 : 3,
          slidesToScroll: 1,
          centerMode: true,
          autoplay: true,
          speed: 400,
        }}
        content={partnersData}
        className="partners"
      />
      <ContactInfo contactInfo={contactInfo} />
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allCosmicjsAllPages {
      nodes {
        metadata {
          global {
            metadata {
              logo {
                imgix_url
              }
              privacy_policy {
                metadata {
                  description
                  title
                }
              }
              menu_links {
                metadata {
                  links {
                    icon {
                      imgix_url
                    }
                    link
                    text
                  }
                }
              }
            }
          }
          home {
            metadata {
              hero {
                metadata {
                  description
                  image {
                    imgix_url
                  }
                  image_alt
                  primary_btn_link
                  primary_btn_text
                  primary_text
                  secondary_btn_link
                  secondary_btn_text
                  secondary_text
                }
              }
              industries {
                metadata {
                  slider {
                    icon {
                      imgix_url
                    }
                    title
                  }
                }
              }
              contact {
                metadata {
                  info {
                    details_text
                    icon {
                      imgix_url
                    }
                    id
                    type_text
                  }
                  messages {
                    title
                    short_text
                  }
                }
              }
              navigation {
                metadata {
                  details {
                    button_text
                    icon {
                      imgix_url
                    }
                    link
                    text
                  }
                }
              }
              partners {
                metadata {
                  slider {
                    icon {
                      imgix_url
                    }
                    title
                  }
                }
              }
              specialization {
                metadata {
                  description
                  image {
                    imgix_url
                  }
                  image_alt
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
