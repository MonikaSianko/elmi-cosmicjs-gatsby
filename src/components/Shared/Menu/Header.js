import React, { memo } from "react"

import LanguagePicker from "../LanguagePicker/LanguagePicker"
import { StyledHeader } from "./Menu.styled"
import MenuLinks from "./MenuLinks"
import { GenericWrapper } from "../Generic/Generic.styles"
import { breakpointsMax } from "../../../constants/contants"
import { useMediaQuery } from "react-responsive"

const Header = variables => {
  const logo = variables.variables.metadata.logo.imgix_url
  const isMobile = useMediaQuery({ query: breakpointsMax.m })
  return (
    <StyledHeader>
      <GenericWrapper>
        <div className="header-wrapper">
          <img src={logo} alt="elmi-logo" className="logo"></img>
          <div className="navigation">
            {!isMobile && <MenuLinks variables={variables} />}
            <LanguagePicker />
          </div>
        </div>
      </GenericWrapper>
    </StyledHeader>
  )
}

export default memo(Header)
