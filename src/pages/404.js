import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { fontSize, fontWeight } from "../constants/contants"

const NotFoundPage = ({ data }) => {
  const bgImage =
    data.allCosmicjsGlobalVariables.nodes[0].metadata.not_found.imgix_url
  console.log(bgImage)
  return (
    <Styled404>
      <h1>Sorry, the page was not found</h1>
      <img src={bgImage}></img>
    </Styled404>
  )
}

export default NotFoundPage

const Styled404 = styled.section`
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  h1 {
    font-size: clamp(3rem, 10vw, 6rem);
    padding-top: 60px;
    width: 100%;
  }
  img {
    width: 100vw;
  }
`

export const query = graphql`
  query NotFoundQuery {
    allCosmicjsGlobalVariables {
      nodes {
        metadata {
          not_found {
            imgix_url
          }
        }
      }
    }
  }
`
