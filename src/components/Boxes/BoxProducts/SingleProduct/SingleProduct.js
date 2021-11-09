import React, { memo, useState } from "react"
import { empty } from "../../../../helpers/helpers"
import Description from "../../../Shared/Description/Description"
import { ArrowDown, ArrowUp } from "../../../Shared/Generic/Generic.styles"

import { StyledSingleProduct } from "./SingleProduct.styled"

const SingleProduct = ({ product, main }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { title, description, image } = product

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  const singleProduct = (
    // <div className="product main">
    //   <div
    //     dangerouslySetInnerHTML={{ __html: description }}
    //     className="description"
    //   ></div>
    //   <img src={image.imgix_url} alt={title}></img>
    // </div>
    <Description
      title={title}
      description={description}
      src={image.imgix_url}
      alt={title}
      className="product main"
      hideTitle
    />
  )
  return (
    <StyledSingleProduct main={main}>
      <div className="single-product-wrapper">
        <div className="product-heading">
          <h3>{title}</h3>
          {!main && !isOpen && <ArrowDown onClick={handleOpen} />}
        </div>
        {main && singleProduct}
        {isOpen && singleProduct}
        {!main && isOpen && <ArrowUp onClick={handleOpen} />}
      </div>
    </StyledSingleProduct>
  )
}

export default memo(SingleProduct)
