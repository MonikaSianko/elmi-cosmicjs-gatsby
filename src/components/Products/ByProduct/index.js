import React from "react"
// styled components
import { ByProductBox, ArrowDown } from "./styles"
import { Headline, Text } from "../../GlobalStyles/globalStyles"

export default function ByProduct({
  name,
  main,
  description,
  photo,
  photoTitle,
  isOpen,
  handleClick,
}) {
  return (
    <>
      {!main && (
        <ByProductBox>
          <Headline uppercase>{name}</Headline>
          {isOpen && (
            <>
              <div>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></Text>
              </div>
              <img src={photo} alt={photoTitle}></img>
            </>
          )}
          <ArrowDown onClick={handleClick} />
        </ByProductBox>
      )}
    </>
  )
}
