import { empty } from "@apollo/client"
import React, { useState } from "react"
import { inputValidation } from "../../../../helpers/validations"

const Input = ({
  type,
  inputType,
  setInputValue,
  inputValue,
  labelText,
  textarea,
}) => {
  const [isBlured, setIsBlured] = useState(false)
  const validation = inputValidation(inputValue, inputType)
  const handleOnBlur = () => {
    if (validation !== "success") {
      setIsBlured(prev => !prev)
    }
  }
  return (
    <div>
      <label htmlFor={inputType}>{labelText}</label>
      {textarea !== undefined ? (
        <textarea
          onChange={e => setInputValue(e.target.value)}
          onBlur={handleOnBlur}
          value={inputValue}
        />
      ) : (
        <input
          type={type}
          onChange={e => setInputValue(e.target.value)}
          onBlur={handleOnBlur}
          value={inputValue}
        />
      )}
      {isBlured && <error>{validation}</error>}
    </div>
  )
}

export default Input
