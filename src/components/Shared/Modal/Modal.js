import React from "react"
import styled from "styled-components"
import {
  breakpointsMax,
  colors,
  fontSize,
  radius,
  shadows,
  spaces,
} from "../../../constants/contants"
import { empty } from "../../../helpers/helpers"
import Button from "../Buttons/Button"
import { GenericWrapper } from "../Styles/Generic.styles"

const Modal = ({
  title,
  shortText,
  imgUrl,
  imgAlt,
  btnText,
  btnLink,
  description,
  closeText,
  handleCloseModal,
}) => {
  return (
    <StyledModal>
      <GenericWrapper>
        <div className="modal">
          <h1>{title}</h1>
          {shortText !== empty && <h2>{shortText}</h2>}

          {imgUrl !== empty && <img src={imgUrl} alt={imgAlt}></img>}
          {description !== empty && (
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="description"
            ></div>
          )}

          {btnText && <Button text={btnText} href={btnLink} />}
          <button className="btn-close" onClick={handleCloseModal}>
            {closeText}
          </button>
        </div>
      </GenericWrapper>
    </StyledModal>
  )
}

export default Modal

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding-top: ${spaces.header};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .modal {
    width: 600px;
    height: 600px;
    padding: 2em;
    background: ${colors.white};
    box-shadow: ${shadows.cardShadow};
    padding: ${spaces.xl};
    border-radius: ${radius.m};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      height: 100%;
    }
    h1 {
      font-size: ${fontSize.xl};
    }
    .description {
      text-overflow: ellipsis;
      overflow-y: scroll;
      p {
        text-overflow: ellipsis;
      }
    }
    img {
      margin-bottom: ${spaces.l};
    }
    .btn-close {
      padding: 1em 3em;
      border: none;
      color: ${colors.white};
      background-color: ${colors.text};
      box-shadow: ${shadows.boxShadow};
      margin-top: ${spaces.m};
      cursor: pointer;
      :hover {
        border-radius: ${radius.button};
        transition: all 1s ease 0s;
      }
    }
  }
  @media ${breakpointsMax.m} {
    padding-top: 80px;
    .modal {
      width: 90%;
      height: 80%;
      padding: ${spaces.s};
    }
  }
`
