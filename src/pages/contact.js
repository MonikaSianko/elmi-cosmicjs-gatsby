import { graphql } from "gatsby"
import React, { memo } from "react"
import BoxContact from "../components/Boxes/BoxContact/BoxContact"
import Layout from "../components/Shared/Layout/Layout"

const ContactPage = ({ data }) => {
  const pagesData = data.allCosmicjsAllPages.nodes[0].metadata
  const globalData = pagesData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links
  const contactData = pagesData.contact.metadata
  return (
    <Layout
      menuLinks={menuLinks}
      logo={logo}
      policy={globalData.privacy_policy.metadata}
    >
      <BoxContact contactData={contactData} />
    </Layout>
  )
}

export default memo(ContactPage)

export const query = graphql`
  query ContactQuery {
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
          contact {
            metadata {
              contact_details {
                metadata {
                  id
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

              messages {
                form_email
                form_message
                form_name
                form_send
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
`
