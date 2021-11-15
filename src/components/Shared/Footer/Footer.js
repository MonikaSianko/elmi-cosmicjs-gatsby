import React, { memo, useState } from "react"
import { GenericWrapper } from "../Styles/Generic.styles"
import MenuLinks from "../MenuLinks/MenuLinks"
import Modal from "../Modal/Modal"

import { StyledFooterWrapper } from "./Footer.styled"

const Footer = ({ menuLinks, policy }) => {
  const [isModalOpen, setOpenModal] = useState(false)
  const { title, description } = policy
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  console.log(isModalOpen)
  return (
    <StyledFooterWrapper>
      <GenericWrapper className="generic-wrapper">
        <MenuLinks withIcons menuLinks={menuLinks}>
          <button onClick={handleOpenModal}>{title}</button>
        </MenuLinks>

        {isModalOpen && (
          <Modal
            title={title}
            description={description}
            closeText="close"
            handleCloseModal={handleCloseModal}
          />
        )}
      </GenericWrapper>
    </StyledFooterWrapper>
  )
}

export default memo(Footer)
