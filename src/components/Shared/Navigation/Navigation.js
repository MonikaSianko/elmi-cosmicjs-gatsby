import React, { memo } from "react"
import { empty } from "../../../helpers/helpers"
import { ArrowDown, GenericWrapper } from "../Generic/Generic.styles"

import { Card, StyledNavigationWrapper } from "./Navigation.styled"

const Navigation = ({ navigationData, theme, layout, border }) => {
  return (
    <StyledNavigationWrapper
      theme={theme !== empty ? theme : ""}
      layout={layout !== empty ? layout : ""}
      border={border !== empty ? border : ""}
    >
      <GenericWrapper className="generic-wrapper">
        {navigationData.details.map((el, i) => {
          const withButton = el.button_text !== "" || undefined

          return (
            <Card key={i}>
              <img src={el.icon.imgix_url} alt={el.text}></img>
              <h5>{el.text}</h5>
              {withButton ? (
                <a href={el.link} className="with-text">
                  {el.button_text}
                </a>
              ) : (
                <a href={el.link} className="with-arrow">
                  <ArrowDown />
                </a>
              )}
            </Card>
          )
        })}
      </GenericWrapper>
    </StyledNavigationWrapper>
  )
}

export default memo(Navigation)
