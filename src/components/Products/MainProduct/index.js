import React from "react"
import { Headline, Text } from "../../GlobalStyles/globalStyles"
// styled components
import { MainProductBox } from "./styles"

export default function MainProduct({
  name,
  main,
  description,
  photo,
  photoTitle,
}) {
  return (
    <>
      {main && (
        <MainProductBox>
          <div>
            <Headline blue uppercase>
              {name}
            </Headline>
            <Text
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></Text>
          </div>
          <img src={photo} alt={photoTitle}></img>
        </MainProductBox>
      )}
    </>
  )
}
