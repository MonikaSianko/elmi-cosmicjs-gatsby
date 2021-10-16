// import * as React from "react"
// import { graphql } from "gatsby"
// import "../components/reset.css"

// import ServicesNav from "../components/Serivces/ServicesNav"
// import Header from "../components/Header/Header"
// import Service from "../components/Serivces/Service"
// import Footer from "../components/Layout/Footer/index"

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

// export default function ServicesPage({ data }) {
//   console.log(data)
//   return (
//     <>
//       <Header />
//       <ServicesNav />
//       {data.allContentfulService.nodes.map(el => (
//         <>
//           <Service
//             anchorTag={el.anchorTag}
//             title={el.title}
//             details={el.detailsIcons}
//             description={el.description.childMarkdownRemark.html}
//             photo={el.photo.file.url}
//             photoTitle={el.photo.title}
//           />
//         </>
//       ))}
//       <Footer />
//     </>
//   )
// }

// export const servicesQuery = graphql`
//   query ServicesQuery($language: String) {
//     allContentfulService(filter: { node_locale: { eq: $language } }) {
//       nodes {
//         node_locale
//         anchorTag
//         title
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//         detailsIcons {
//           file {
//             url
//           }
//           description
//           title
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
