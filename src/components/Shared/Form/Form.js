import React, { useState } from "react"
import Button from "../Buttons/Button"
import { StyledForm } from "./Form.styles"

function Form({ messages }) {
  const { form_email, form_name, form_message, form_send } = messages
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessages, setErrorMessages] = useState([])
  const [showErrors, setShowErrors] = useState(false)
  return (
    <StyledForm>
      <div>
        <label htmlFor="email" onChange={e => setEmail(e.target.value)}>
          {form_email}
        </label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="name">{form_name}</label>
        <input type="text" onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="subject">subject</label>
        <input type="text" onChange={e => setSubject(e.target.value)} />
      </div>
      <div>
        <label htmlFor="form_message">{form_message}</label>
        <textarea onChange={e => setMessage(e.target.value)} />
      </div>
      <Button href="#" text={form_send} type="button" />
    </StyledForm>
  )
}

export default Form
