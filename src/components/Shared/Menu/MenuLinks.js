import React, { memo } from "react"

const MenuLinks = variables => {
  const data = variables.variables.variables.metadata.links
  console.log(data)
  return (
    <ul className="menu-links">
      {data.map(({ text, href, id }) => (
        <li key={id}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  )
}

export default memo(MenuLinks)
