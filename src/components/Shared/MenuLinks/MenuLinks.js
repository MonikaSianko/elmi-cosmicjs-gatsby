import React, { memo } from "react"
import { StyledMenuLinks } from "./MenuLinks.styled"

const MenuLinks = ({ menuLinks, withIcons }) => {
  return (
    <StyledMenuLinks className="menu-links">
      <ul className="links">
        {menuLinks.map(({ text, link, icon }) => (
          <li key={text}>
            {withIcons && <img src={icon.imgix_url} alt={text} />}
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </StyledMenuLinks>
  )
}

export default memo(MenuLinks)
