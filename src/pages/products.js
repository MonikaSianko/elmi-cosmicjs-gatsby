// import * as React from "react"
// import { graphql } from "gatsby"
// import "../components/reset.css"

// import Header from "../components/Header/Header"
// import Footer from "../components/Footer/Footer"
// import Product from "../components/Products/Product"
// import ProductType from "../components/Products/ProductType"
// import ProductsNav from "../components/Products/Nav/index"

// import softwareIcon from "../assets/software.svg"
// import hardwareIcon from "../assets/hardware.svg"

// //anchor tag scroll
// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

// export default function ProductsPage({ data }) {
//   const products = data.allContentfulProduct.nodes
//   const dataSorted = products.sort((a, b) => a.family.localeCompare(b.family))

//   return (
//     <>
//       <Header />
//       <ProductsNav />
//       <ProductType icon={softwareIcon} type="Software">
//         {dataSorted.map(
//           el =>
//             el.type === "Software" && (
//               <Product
//                 name={el.name}
//                 family={el.family}
//                 main={el.main}
//                 description={el.description.childMarkdownRemark.html}
//                 photo={el.photo.file.url}
//                 photoTitle={el.photo.title}
//               />
//             )
//         )}
//       </ProductType>

//       <ProductType icon={hardwareIcon} type="Hardware">
//         {dataSorted.map(
//           el =>
//             el.type === "Hardware" && (
//               <Product
//                 name={el.name}
//                 family={el.family}
//                 main={el.main}
//                 description={el.description.childMarkdownRemark.html}
//                 photo={el.photo.file.url}
//                 photoTitle={el.photo.title}
//               />
//             )
//         )}
//       </ProductType>
//       <Footer />
//     </>
//   )
// }

// export const productsQuery = graphql`
//   query ProductsQuery($language: String) {
//     allContentfulProduct(filter: { node_locale: { eq: $language } }) {
//       nodes {
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//         family
//         name
//         photo {
//           title
//           file {
//             url
//           }
//         }
//         type
//         main
//       }
//     }
//   }
// `
