import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"

import { FormBox } from "./styles"
import ButtonPrimary from "../../GlobalStyles/Buttons/ButtonPrimary"

function Form() {
  const intl = useIntl()
  return (
    <div>
      <FormBox>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="name">
            {intl.formatMessage({ id: "name-and-surname" })}
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="your message">
            {intl.formatMessage({ id: "your-message" })}
          </label>
          <textarea />
        </div>
        <ButtonPrimary href="#" text={intl.formatMessage({ id: "send" })} />
      </FormBox>
    </div>
  )
}

export default Form
