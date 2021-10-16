import React, { memo } from "react"
import { GenericWrapper } from "../../Generic/Generic.styles"
import LanguagePicker from "../LanguagePicker/LanguagePicker"
import { StyledHeader } from "./Menu.styled"
import MenuLinks from "./MenuLinks"
import logo from "../../../assets/elmi-logo.png"

const Header = variables => {
  return (
    <StyledHeader>
      <GenericWrapper>
        <div className="header-wrapper">
          <img src={logo} alt="elmi-logo" className="logo"></img>
          <div className="navigation">
            <MenuLinks variables={variables} />
            <LanguagePicker />
          </div>
        </div>
      </GenericWrapper>
    </StyledHeader>
  )
}

export default memo(Header)
