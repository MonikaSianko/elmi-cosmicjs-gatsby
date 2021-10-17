import React, { memo } from "react"
import { GenericWrapper } from "../../Generic/Generic.styles"
import { ArrowDown, Card, StyledNavigationWrapper } from "./Navigation.styled"

const Navigation = ({ data }) => {
  return (
    <StyledNavigationWrapper className="navigation-wrapper">
      <GenericWrapper className="generic-wrapper">
        {data.map(el => (
          <Card key={el.id} className="card">
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
