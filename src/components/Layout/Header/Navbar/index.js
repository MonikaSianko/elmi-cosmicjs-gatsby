import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Hamburger from "hamburger-react"

import LanguagePicker from "../LanguagePicker/index"
import NavList from "../NavElements/index"

import { NavbarBox } from "./styles"
import { breakpoints } from "../../../utils/breakpoints"

function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const isMd = useMediaQuery({ query: `${breakpoints.md}` })
  return (
    <NavbarBox burgerState={isOpen}>
      {isMd && <Hamburger toggled={isOpen} toggle={setOpen} color="#051923" />}
      {isOpen && <NavList />}
      {!isMd && <NavList />}
      <LanguagePicker burgerState={isOpen} />
    </NavbarBox>
  )
}

export default NavBar
