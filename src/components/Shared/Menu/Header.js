import React, { memo, useState } from "react"

import LanguagePicker from "../LanguagePicker/LanguagePicker"
import { StyledHeader } from "./Header.styled"
import { GenericWrapper } from "../Generic/Generic.styles"
import { breakpointsMax } from "../../../constants/contants"
import { useMediaQuery } from "react-responsive"
import { RiMenuLine as MenuIcon } from "react-icons/ri"
import MenuLinks from "../MenuLinks/MenuLinks"

const Header = ({ menuLinks, logo }) => {
  const isMobile = useMediaQuery({ query: breakpointsMax.m })
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }
  return (
    <StyledHeader>
      <GenericWrapper
        className={("generic-wrapper", isMenuOpen ? "menu-open" : "")}
      >
        <div className="header-wrapper">
          <img src={logo} alt="elmi-logo" className="logo"></img>
          {isMobile ? (
            <>
              <MenuIcon onClick={toggleMenu} className="menu-icon" />
              {isMenuOpen && (
                <div className="navigation">
                  <MenuLinks menuLinks={menuLinks} withIcons />
                  <LanguagePicker />
                </div>
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
