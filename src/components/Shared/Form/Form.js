import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

import { FormBox } from "./Form.styles"
import Button from "../Buttons/Button"

function Form({ data }) {
  const { email_text, name_text, your_message, send } = data
  return (
    <div>
      <FormBox>
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
      </FormBox>
    </div>
  )
}

export default Form
