import React, { useState } from "react"
import { EMAIL, MESSAGE, NAME, SUBJECT, TEXT } from "../../../../constants"
import Button from "../../../Shared/Buttons/Button"
import Input from "../../../Shared/Form/Input/Input"
import { StyledForm } from "./ContactForm.styles"

function ContactForm({ messages }) {
  const { form_email, form_name, form_message, form_send } = messages
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  console.log(email)
  return (
    <StyledForm>
      <Input
        type={EMAIL}
        inputType={EMAIL}
        setInputValue={setEmail}
        inputValue={email}
        labelText="email"
      />
      <Input
        type={TEXT}
        inputType={NAME}
        setInputValue={setName}
        inputValue={name}
        labelText="name and surname"
      />
      <Input
        type={TEXT}
        inputType={SUBJECT}
        setInputValue={setSubject}
        inputValue={subject}
        labelText="subject"
      />
      <Input
        inputType={MESSAGE}
        setInputValue={setMessage}
        inputValue={message}
        labelText="message"
        textarea
      />

      <Button href="#" text={form_send} type="button" />
    </StyledForm>
  )
}

export default ContactForm
