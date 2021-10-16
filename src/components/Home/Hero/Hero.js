import * as React from "react"
//styled components
import { Container } from "../../GlobalStyles/globalStyles"
import { WrapperHero, Text, ImageHero } from "./HeroStyles"
import ButtonsBox from "../../GlobalStyles/Buttons/ButtonsBox"
// import Industries from "./Industries/Industries"

export default function Hero({ data }) {
  console.log(data)
  const {
    primary_btn_link,
    primary_btn_text,
    secondary_text,
    primary_text,
    secondary_btn_link,
    secondary_btn_text,
  } = data
  return (
    <WrapperHero>
      <ImageHero />
      <Container>
        <Text>
          <h1>{primary_text}</h1>
          <p>{secondary_text}</p>
        </Text>
        <ButtonsBox
          primary_href={primary_btn_link}
          primary_text={primary_btn_text}
          secondary_href={secondary_btn_link}
          secondary_text={secondary_btn_text}
          secondary_theme="white"
        />
      </Container>
    </WrapperHero>
  )
}
