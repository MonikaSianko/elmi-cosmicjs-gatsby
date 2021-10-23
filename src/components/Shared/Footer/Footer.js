import React, { memo } from "react"
import { GenericWrapper } from "../Generic/Generic.styles"
import MenuLinks from "../MenuLinks/MenuLinks"

import { StyledFooterWrapper } from "./Footer.styled"

const Footer = ({ data }) => {
  const menu_links = data.menu_links
  return (
    <StyledFooterWrapper>
      <GenericWrapper className="generic-wrapper">
        <MenuLinks withIcons data={menu_links} />
      </GenericWrapper>
    </StyledFooterWrapper>
  )
}

export default memo(Footer)
