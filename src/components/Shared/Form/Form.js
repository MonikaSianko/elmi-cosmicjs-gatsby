import React from "react"
import Button from "../Buttons/Button"
import { StyledForm } from "./Form.styles"

function Form({ data }) {
  const { email_text, name_text, your_message, send } = data
  return (
    <StyledForm>
      <div>
        <label htmlFor="email">{email_text}</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="name">{name_text}</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="your message">{your_message}</label>
        <textarea />
      </div>
      <Button href="#" text={send} />
    </StyledForm>
  )
}

export default Form
