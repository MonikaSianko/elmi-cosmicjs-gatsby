import React from "react"
import { graphql } from "gatsby"
import "../components/reset.css"

import Footer from "../components/Layout/Footer/index"
import Hero from "../components/Home/Hero/Hero"
import Header from "../components/Shared/Menu/Header"

export default function HomePage({ data }) {
  const hero = data.allCosmicjsHome.nodes[0].metadata.section_hero
  const variables = data.allCosmicjsGlobalVariables.nodes[0]

  return (
    <>
      <Header variables={variables} />
      <Hero data={hero} />
      <Footer />
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
          }
          section_industries {
            names
          }
          section_specialization {
            description
          }
          section_contact {
            address
            email
            phone
          }
        }
      }
    }
    allCosmicjsGlobalVariables(filter: { locale: { eq: $language } }) {
      nodes {
        metadata {
          links {
            href
            text
          }
        }
        locale
      }
    }
  }
`

// export const query = graphql`
//   query MyQuery($language: String) {
//     allContentfulHero(filter: { node_locale: { eq: $language } }) {
//       nodes {
//         buttonPrimaryText
//         buttonSecondaryText
//         buttonSecondaryLink
//         buttonPrimaryLink
//         largeText
//         smallText
//         node_locale
//       }
//     }
// //     allContentfulSpecialization(filter: { node_locale: { eq: $language } }) {
// //       nodes {
// //         firstText {
// //           childMarkdownRemark {
// //             html
// //           }
// //         }
// //         secondText {
// //           childMarkdownRemark {
// //             html
// //           }
// //         }
// //         image {
// //           title
// //           file {
// //             url
// //           }
// //         }
// //         node_locale
// //       }
// //     }
// //     allContentfulAbout(filter: { node_locale: { eq: $language } }) {
// //       nodes {
// //         node_locale
// //         buttonPrimaryLink
// //         buttonPrimaryText
// //         buttonSecondaryText
// //         buttonSecondaryLink
// //         title
// //         description {
// //           childMarkdownRemark {
// //             html
// //           }
// //         }
// //       }
// //     }
// //   }
// // `
