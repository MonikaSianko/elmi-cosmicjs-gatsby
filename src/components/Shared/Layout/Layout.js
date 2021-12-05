import React, { memo, useState, useEffect } from "react"
import Footer from "../Footer/Footer"
import Loader from "../Loader/Loader"
import Header from "../Menu/Header"

const Layout = ({ children, menuLinks, logo, policy }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header menuLinks={menuLinks} logo={logo} />
          {children}
          <Footer menuLinks={menuLinks} policy={policy} />
        </>
      )}
    </>
  )
}

export default memo(Layout)
