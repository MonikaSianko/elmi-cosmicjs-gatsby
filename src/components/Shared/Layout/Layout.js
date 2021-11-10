import React, { memo } from "react"
import Footer from "../Footer/Footer"
import Header from "../Menu/Header"

const Layout = ({ children, menuLinks, logo, policy }) => {
  return (
    <>
      <Header menuLinks={menuLinks} logo={logo} />
      {children}
      <Footer menuLinks={menuLinks} policy={policy} />
    </>
  )
}

export default memo(Layout)
