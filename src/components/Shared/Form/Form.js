import React from "react"
import Button from "../Buttons/Button"
import { StyledForm } from "./Form.styles"

function Form({ messages }) {
  const { form_email, form_name, form_message, form_send } = messages
  return (
    <StyledForm>
      <div>
        <label htmlFor="email">{form_email}</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="name">{form_name}</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="form_message">{form_message}</label>
        <textarea />
      </div>
      <Button href="#" text={form_send} />
    </StyledForm>
  )
}

export default Form
