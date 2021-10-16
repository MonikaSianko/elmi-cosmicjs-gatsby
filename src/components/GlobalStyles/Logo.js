import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import styled from "styled-components"

import logo from "../../assets/elmi-logo.png"
import * as palette from "../utils/styles"

export function Logo() {
  const intl = useIntl()
  return (
    <LogoBox href={intl.formatMessage({ id: "home_link" })}>
      {/* <img src={logo} alt="elmi-logo"></img> */}
      <h1>Elmi</h1>
      <h2>Systemy Automatyki</h2>
    </LogoBox>
  )
}

const LogoBox = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${palette.textColor};
  img {
    width: 80px;
    height: 50px;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    padding-top: 0.5em;
  }
  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
  }
`
