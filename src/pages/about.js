// import React from "react"
// import { graphql } from "gatsby"
// import { useIntl } from "gatsby-plugin-react-intl"

// import "../components/reset.css"

// import Layout from "../components/Layout/Layout"
// import PersonCard from "../components/OurTeam/PersonCard"
// import {
//   OurTeamWrapper,
//   CardsWrapper,
// } from "../components/OurTeam/PersonStyles"
// import { Container } from "../components/GlobalStyles/globalStyles"

// export default function AboutPage({ data }) {
//   const intl = useIntl()
//   return (
//     <>
//       <Layout color="grey">
//         <OurTeamWrapper>
//           <Container style={{ overflow: "hidden" }}>
//             <h2>{intl.formatMessage({ id: "our-team" })}</h2>
//             <CardsWrapper>
//               {data.allContentfulOurTeam.nodes.map(el => (
//                 <PersonCard
//                   title={el.title}
//                   fullName={el.fullName}
//                   description={el.description.childMarkdownRemark.html}
//                   photo={el.photo.file.url}
//                 />
//               ))}
//             </CardsWrapper>
//           </Container>
//         </OurTeamWrapper>
//       </Layout>
//     </>
//   )
// }

// export const ourTeamQuery = graphql`
//   query ourTeamQuery($language: String) {
//     allContentfulOurTeam(filter: { node_locale: { eq: $language } }) {
//       nodes {
//         node_locale
//         title
//         fullName
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//         photo {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `
