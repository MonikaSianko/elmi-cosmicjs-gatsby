import React from "react"
import Footer from "./Footer/index"
import Header from "./Header/Header"
import { LayoutWrapper } from "./LayoutStyles"

function Layout({ children, color }) {
  return (
    <LayoutWrapper color={color}>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
