import React from "react"
//icons
import software from "../../../assets/software.svg"
import hardware from "../../../assets/hardware.svg"
//components & styles
import NavCard from "../../GlobalStyles/SectionNav/NavCard"
import { NavWrapper } from "../../GlobalStyles/SectionNav/NavCard"

export default function ProductsNav() {
  return (
    <NavWrapper>
      <NavCard src={software} alt="software" href="#software" text="Software" />
      <NavCard src={hardware} alt="hardware" href="#hardware" text="Hardware" />
    </NavWrapper>
  )
}
