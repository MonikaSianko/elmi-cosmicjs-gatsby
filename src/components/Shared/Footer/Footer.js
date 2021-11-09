import React, { memo } from "react"
import { GenericWrapper } from "../Generic/Generic.styles"
import MenuLinks from "../MenuLinks/MenuLinks"

import { StyledFooterWrapper } from "./Footer.styled"

const Footer = ({ menuLinks }) => {
  return (
    <StyledFooterWrapper>
      <GenericWrapper className="generic-wrapper">
        <MenuLinks withIcons menuLinks={menuLinks} />
      </GenericWrapper>
    </StyledFooterWrapper>
  )
}

export default memo(Footer)
