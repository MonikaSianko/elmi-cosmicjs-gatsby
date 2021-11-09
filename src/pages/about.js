import { graphql } from "gatsby"
import React, { memo } from "react"
import BoxAbout from "../components/Boxes/BoxAbout/BoxAbout"
import Layout from "../components/Shared/Layout/Layout"

const AboutPage = ({ data }) => {
  const homeData = data.allCosmicjsHome.nodes[0].metadata
  const globalData = homeData.global.metadata
  const logo = globalData.logo.imgix_url
  const menuLinks = globalData.menu_links.metadata.links

  const aboutData = homeData.about[0].metadata
  const messages = aboutData.messages
  const aboutDescription = aboutData.description.metadata
  const teamMembers = aboutData.team_members

  return (
    <Layout logo={logo} menuLinks={menuLinks}>
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
