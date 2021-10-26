import React, { memo } from "react"
import { GenericWrapper } from "../Generic/Generic.styles"

import { ArrowDown, Card, StyledNavigationWrapper } from "./Navigation.styled"

const Navigation = ({ data, className }) => {
  return (
    <StyledNavigationWrapper>
      <GenericWrapper className="generic-wrapper">
        {data.map(el => (
          <Card key={el.id}>
            <img src={el.icon} alt={el.title}></img>
            <h5>{el.title}</h5>
            {!el.btnText ? (
              <a href={el.btnLink} className="with-arrow">
                <ArrowDown />{" "}
              </a>
            ) : (
              <a href={el.btnLink} className="with-text">
                {el.btnText}
              </a>
            )}
          </Card>
        ))}
      </GenericWrapper>
    </StyledNavigationWrapper>
  )
}

export default memo(Navigation)
