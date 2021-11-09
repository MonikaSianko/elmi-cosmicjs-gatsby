import React, { memo } from "react"
import { GenericWrapper } from "../../Shared/Generic/Generic.styles"

import { StyledBoxProducts } from "./BoxProducts.styled"
import SingleProduct from "./SingleProduct/SingleProduct"

const BoxProducts = ({ navigationData, productGroups }) => {
  return (
    <StyledBoxProducts>
      <GenericWrapper className="generic-wrapper">
        {navigationData.details.map((navEl, i) => (
          <div className="products-wrapper" id={navEl.link.replace("#", "")}>
            <div className="heading" key={i}>
              <img src={navEl.icon.imgix_url} alt={navEl.text}></img>
              <h2>{navEl.text}</h2>
            </div>

            {productGroups
              .filter(
                el =>
                  el.metadata.type.toUpperCase() === navEl.text.toUpperCase()
              )
              .map((product, i) => (
                <>
                  <div key={i}>
                    <SingleProduct key={i} product={product.metadata} main />
                  </div>
                  <div>
                    {product.metadata.single_product.map((el, i) => (
                      <>
                        <SingleProduct key={i} product={el} />
                      </>
                    ))}
                  </div>
                </>
              ))}
          </div>
        ))}
      </GenericWrapper>
    </StyledBoxProducts>
  )
}

export default memo(BoxProducts)
