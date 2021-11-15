import { graphql } from "gatsby"
import React from "react"
import { memo } from "react"
import BoxServices from "../components/Boxes/BoxServices/BoxServices"
import Layout from "../components/Shared/Layout/Layout"
import Navigation from "../components/Shared/Navigation/Navigation"

const ServicesPage = ({ data }) => {
  const pagesData = data.allCosmicjsAllPages.nodes[0].metadata
  const globalData = pagesData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links

  const servicesData = pagesData.services[0].metadata
  const navigationData = servicesData.navigation.metadata
  const servicesContent = servicesData.services

  return (
    <Layout
      menuLinks={menuLinks}
      logo={logo}
      policy={globalData.privacy_policy.metadata}
    >
      <Navigation navigationData={navigationData} border />
      <BoxServices servicesContent={servicesContent} />
    </Layout>
  )
}

export default memo(ServicesPage)

export const query = graphql`
  query ServicesQuery {
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
          services {
            metadata {
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
              services {
                metadata {
                  title
                  description
                  image_alt
                  id
                  features {
                    details {
                      image {
                        imgix_url
                      }
                      image_alt
                      title
                    }
                    with_numbers
                    layout_horizontal
                  }
                  image {
                    imgix_url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
