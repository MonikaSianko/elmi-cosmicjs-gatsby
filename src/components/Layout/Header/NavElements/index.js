import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

import { NavLink } from "./styles"

export default function NavList() {
  const intl = useIntl()
  return (
    <ul>
      <li>
        <NavLink to={intl.formatMessage({ id: "home_link" })}>
          {intl.formatMessage({ id: "home" })}
        </NavLink>
      </li>
      <li>
        <NavLink to={intl.formatMessage({ id: "products_link" })}>
          {intl.formatMessage({ id: "products" })}
        </NavLink>
      </li>
      <li>
        <NavLink to={intl.formatMessage({ id: "services_link" })}>
          {intl.formatMessage({ id: "services" })}
        </NavLink>
      </li>
      {/* <li>
        <NavLink to={intl.formatMessage({ id: "shop_link" })}>
          {intl.formatMessage({ id: "shop" })}
        </NavLink>
      </li> */}
      <li>
        <NavLink to={intl.formatMessage({ id: "about_link" })}>
          {intl.formatMessage({ id: "about" })}
        </NavLink>
      </li>
      <li>
        <NavLink to={intl.formatMessage({ id: "contact_link" })}>
          {intl.formatMessage({ id: "contact" })}
        </NavLink>
      </li>
    </ul>
  )
}
