import React from "react"
import { graphql } from "gatsby"
import "../components/reset.css"
import Layout from "../components/Shared/Layout/Layout"
import Navigation from "../components/Shared/Navigation/Navigation"
import BoxProducts from "../components/Boxes/BoxProducts/BoxProducts"

export default function ProductsPage({ data }) {
  // for all page queries
  const homeData = data.allCosmicjsHome.nodes[0].metadata
  const globalData = homeData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links
  // product page query
  const productsData = homeData.products[0].metadata
  const navigationData = productsData.navigation.metadata
  const productGroups = productsData.product_groups

  return (
    <Layout menuLinks={menuLinks} logo={logo}>
      <Navigation navigationData={navigationData} layout="center" border />
      <BoxProducts
        navigationData={navigationData}
        productGroups={productGroups}
      />
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allCosmicjsHome {
      nodes {
        metadata {
          global {
            metadata {
              logo {
                imgix_url
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
          products {
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
              product_groups {
                metadata {
                  description
                  image {
                    imgix_url
                  }
                  single_product {
                    description
                    image {
                      imgix_url
                    }
                    title
                  }
                  title
                  type
                }
              }
            }
          }
        }
      }
    }
  }
`
