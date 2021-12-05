import React, { memo, useEffect, useState } from "react"

import LanguagePicker from "../LanguagePicker/LanguagePicker"
import { StyledHeader } from "./Header.styled"
import { GenericWrapper } from "../Styles/Generic.styles"
import { breakpointsMax } from "../../../constants/contants"
import { useMediaQuery } from "react-responsive"
import { RiMenuLine as MenuIcon } from "react-icons/ri"
import { RiCloseLine as CloseMenu } from "react-icons/ri"
import MenuLinks from "../MenuLinks/MenuLinks"
import { homeEn, homePl } from "../../../helpers/helpers"

const Header = ({ menuLinks, logo }) => {
  const isMobile = useMediaQuery({ query: breakpointsMax.m })
  const [isMenuOpen, setMenuOpen] = useState(false)
  const homeLink = menuLinks.find(
    el => el.text === homeEn || el.text === homePl
  )

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }
  return (
    <StyledHeader isMenuOpen={isMenuOpen}>
      <GenericWrapper
        className={("generic-wrapper", isMenuOpen ? "menu-open" : "")}
      >
        <div className="header-wrapper">
          <a href={homeLink.link}>
            <img src={logo} alt="elmi-logo" className="logo"></img>
          </a>
          {isMobile ? (
            <>
              {isMenuOpen ? (
                <>
                  <CloseMenu onClick={toggleMenu} className="menu-icon close" />
                  <div
                    className={isMenuOpen ? "navigation open" : "navigation"}
                  >
                    <MenuLinks menuLinks={menuLinks} withIcons />
                    <LanguagePicker />
                  </div>
                </>
              ) : (
                <MenuIcon onClick={toggleMenu} className="menu-icon" />
              )}
            </>
          ) : (
            <div className="navigation">
              <MenuLinks menuLinks={menuLinks} />
              <LanguagePicker />
            </div>
          )}
        </div>
      </GenericWrapper>
    </StyledHeader>
  )
}

export default memo(Header)
