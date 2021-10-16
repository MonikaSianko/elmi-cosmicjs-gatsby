import React from "react"
//animations
import Aos from "aos"
import "aos/dist/aos.css"
//styled components
import { ProductsWrapper, Box } from "./ProductsStyles"
import { Container, Headline, Icon } from "../GlobalStyles/globalStyles"

function ProductType({ children, type, icon }) {
  return (
    <ProductsWrapper>
      <Container style={{ overflow: "hidden" }}>
        <Box id={type.toLowerCase()}>
          <Headline blue>
            <Icon src={icon} alt={type} width="2.5em" height="2.5em" />
            {type}
          </Headline>
          <div>{children}</div>
        </Box>
      </Container>
    </ProductsWrapper>
  )
}

export default ProductType
