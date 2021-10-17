import React, { useState } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

import { GoGlobe } from "react-icons/go"
import { BiChevronDown } from "react-icons/bi"
import { StyledLanguagePicker } from "./LanguagePicker.styled"

const languageName = {
  en: "English",
  pl: "Polski",
}

function LanguagePicker({ burgerState }) {
  const [isOpen, setIsOpen] = useState(false)
  const hanldeOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <StyledLanguagePicker isOpen={isOpen}>
      <div className="icons-box">
        <GoGlobe className="globe" />
        <BiChevronDown onClick={hanldeOpen} className="arrow" />
      </div>
      {isOpen ? (
        <div className="dropdown">
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <a key={language} onClick={() => changeLocale(language)}>
                  {languageName[language]}
                </a>
              ))
            }
          </IntlContextConsumer>
        </div>
      ) : null}
    </StyledLanguagePicker>
  )
}

export default LanguagePicker
