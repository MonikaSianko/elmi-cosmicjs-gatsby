import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

//icons
import modernization from "../../assets/modernization.svg"
import prototype from "../../assets/prototypes.svg"
import tools from "../../assets/tools-marking.svg"

//styles & components
import NavCard from "../GlobalStyles/SectionNav/NavCard"
import { NavWrapper } from "../GlobalStyles/SectionNav/NavCard"

function ServicesNav() {
  const intl = useIntl()
  return (
    <NavWrapper>
      <NavCard
        src={modernization}
        alt={intl.formatMessage({ id: "modernization" })}
        text={intl.formatMessage({ id: "modernization" })}
        href="#modernization"
      />
      <NavCard
        src={prototype}
        alt={intl.formatMessage({ id: "prototypes-dev" })}
        text={intl.formatMessage({ id: "prototypes-dev" })}
        href="#prototypes"
      />

      <NavCard
        src={tools}
        alt={intl.formatMessage({ id: "tools-marking" })}
        text={intl.formatMessage({ id: "tools-marking" })}
        href="#tool-marking"
      />
    </NavWrapper>
  )
}

export default ServicesNav
