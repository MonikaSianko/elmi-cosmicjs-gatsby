// import React from "react"
// import { graphql } from "gatsby"
// import "../components/reset.css"

// import Header from "../components/Layout/Header/index"
// import Footer from "../components/Layout/Footer"
// import Contact from "../components/Contact/Contact"

// export default function ContactPage({ data }) {
//   console.log(data)
//   return (
//     <>
//       <Header />
// {data.allContentfulContact.nodes.map(el => (
//   <Contact address={el.address} email={el.email} phone={el.phone} />
// ))}
// <Footer />
//     </>
//   )
// }

// export const contactQuery = graphql`
//   query ContactQuery($language: String) {
//     allContentfulContact(filter: { node_locale: { eq: $language } }) {
//       nodes {
//         address
//         email
//         phone
//         node_locale
//       }
//     }
//   }
// `
