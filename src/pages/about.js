import { graphql } from "gatsby"
import React, { memo } from "react"
import BoxAbout from "../components/Boxes/BoxAbout/BoxAbout"
import Layout from "../components/Shared/Layout/Layout"

const AboutPage = ({ data }) => {
  const pagesData = data.allCosmicjsAllPages.nodes[0].metadata
  const globalData = pagesData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links

  const aboutData = pagesData.about[0].metadata
  const messages = aboutData.messages
  const aboutDescription = aboutData.description.metadata
  const teamMembers = aboutData.team_members

  return (
    <Layout
      menuLinks={menuLinks}
      logo={logo}
      policy={globalData.privacy_policy.metadata}
    >
      <BoxAbout
        messages={messages}
        aboutDescription={aboutDescription}
        teamMembers={teamMembers}
      />
    </Layout>
  )
}

export default memo(AboutPage)

export const query = graphql`
  query AboutQuery {
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
          about {
            metadata {
              description {
                metadata {
                  description
                  image {
                    imgix_url
                  }
                  image_alt
                  title
                }
              }
              messages {
                header_text
              }
              team_members {
                metadata {
                  bio
                  image {
                    imgix_url
                  }
                  name_and_surname
                  position
                }
              }
            }
          }
        }
      }
    }
  }
`
