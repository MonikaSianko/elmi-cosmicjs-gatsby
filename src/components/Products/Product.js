import React, { useState } from "react"
// styled components
import { ProductBox } from "./ProductsStyles"
import MainProduct from "./MainProduct/index"
import ByProduct from "./ByProduct/index"

export default function Product({
  name,
  main,
  description,
  photo,
  photoTitle,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
      <ProductBox>
        <MainProduct
          name={name}
          main={main}
          description={description}
          photo={photo}
          photoTitle={photoTitle}
        />
        <ByProduct
          isOpen={isOpen}
          name={name}
          main={main}
          description={description}
          photo={photo}
          photoTitle={photoTitle}
          handleClick={handleClick}
        />
      </ProductBox>
    </>
  )
}
