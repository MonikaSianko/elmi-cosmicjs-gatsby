import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Button from "../components/Shared/Buttons/Button"
import { GenericWrapper } from "../components/Shared/Styles/Generic.styles"
import { colors, radius, shadows, spaces } from "../constants/contants"

const NotFoundPage = ({ data }) => {
  const notFoundData =
    data.allCosmicjsAllPages.nodes[0].metadata.not_found.metadata
  const bgUrl = notFoundData.background.imgix_url

  return (
    <Styled404 bgUrl={bgUrl}>
      <GenericWrapper className="generic-wrapper">
        <div className="card">
          <h1>{notFoundData.title}</h1>
          <h2>{notFoundData.text}</h2>
          <img src={notFoundData.icon.imgix_url} alt={notFoundData.title}></img>
          <Button
            text={notFoundData.button_text}
            href={notFoundData.button_link}
          />
        </div>
      </GenericWrapper>
    </Styled404>
  )
}

export default NotFoundPage

const Styled404 = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  overflow: hidden;
  .generic-wrapper {
    display: flex;
    align-items: center;
  }
  .card {
    background: ${colors.whiteHue};
    box-shadow: ${shadows.cardShadow};
    padding: ${spaces.xl};
    border-radius: ${radius.m};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,
    h2 {
      color: ${colors.primaryBlue};
    }
    h2 {
      padding: ${spaces.l} 0;
    }
    img {
      margin-bottom: ${spaces.l};
    }
  }
`

export const query = graphql`
  query NotFoundQuery {
    allCosmicjsAllPages {
      nodes {
        metadata {
          not_found {
            metadata {
              background {
                imgix_url
              }
              text
              title
              icon {
                imgix_url
              }
              button_text
              button_link
            }
          }
        }
      }
    }
  }
`
