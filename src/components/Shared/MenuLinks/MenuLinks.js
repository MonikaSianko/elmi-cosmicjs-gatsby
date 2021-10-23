import React, { memo } from "react"
import { GenericWrapper } from "../Generic/Generic.styles"
import { StyledMenuLinks } from "./MenuLinks.styled"

const MenuLinks = ({ data, withIcons }) => {
  return (
    <StyledMenuLinks className="menu-links">
      <ul className="links">
        {data.map(({ text, href, id, icon }) => (
          <li key={id}>
            {withIcons && <img src={icon} alt={text} />}
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </StyledMenuLinks>
  )
}

export default memo(MenuLinks)
