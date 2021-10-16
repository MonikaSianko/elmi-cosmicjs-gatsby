import React, { useEffect } from "react"
import styled from "styled-components"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
//helpers
import { breakpoints } from "../../utils/breakpoints"
//styled components
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"

function ButtonsBox({
  primary_href,
  primary_text,
  secondary_href,
  secondary_text,
  secondary_theme,
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Box data-aos="slide-up">
      <ButtonPrimary href={primary_href} text={primary_text} />
      <ButtonSecondary
        href={secondary_href}
        text={secondary_text}
        theme={secondary_theme}
      />
    </Box>
  )
}

export default ButtonsBox

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 4em;
  @media ${breakpoints.mdMin} {
    justify-content: flex-start;
    flex-direction: row;
  }
`
