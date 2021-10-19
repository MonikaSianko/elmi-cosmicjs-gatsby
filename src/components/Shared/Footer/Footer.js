import React, { memo } from "react"
import { GenericWrapper } from "../Generic/Generic.styles"

import { StyledFooterWrapper } from "./Footer.styled"

const Footer = ({ variables }) => {
  const data = variables.metadata.footer_links

  return (
    <StyledFooterWrapper>
      <GenericWrapper className="generic-wrapper">
        <ul className="footer-links">
          {data.map(({ text, href, id, icon }) => (
            <li key={id}>
              <img src={icon} alt={text} />
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </GenericWrapper>
    </StyledFooterWrapper>
  )
}

export default memo(Footer)
