import React, { memo } from "react"
import { StyledMenuLinks } from "./MenuLinks.styled"

const MenuLinks = ({ menuLinks, withIcons }) => {
  return (
    <StyledMenuLinks className="menu-links">
      <ul className="links">
        {menuLinks.map(({ i, text, link, icon }) => (
          <li key={i}>
            {withIcons && <img src={icon.imgix_url} alt={text} />}
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </StyledMenuLinks>
  )
}

export default memo(MenuLinks)
