import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const NotFoundPage = ({ data }) => {
  const bgImage =
    data.allCosmicjsAllPages.nodes[0].metadata.global.metadata.not_found
      .imgix_url

  return (
    <Styled404>
      <h1>Sorry, the page was not found</h1>
      <img src={bgImage} alt="404 background"></img>
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
    allCosmicjsAllPages {
      nodes {
        metadata {
          global {
            metadata {
              not_found {
                imgix_url
              }
            }
          }
        }
      }
    }
  }
`
