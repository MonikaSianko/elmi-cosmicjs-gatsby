import React, { useState } from "react"
import { inputValidation } from "../../../../helpers/validations"
import { StyledInput } from "./Input.styled"

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
  const handleErrorChange = () => {
    if (validation === "success") {
      return "success"
    }
    if (
      validation === "incorrext text" ||
      validation === "text has to be longer than 3" ||
      validation === "cant be empty"
    ) {
      return "error"
    }
    return ""
  }
  return (
    <StyledInput>
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
      {isBlured && <span className={handleErrorChange()}>{validation}</span>}
    </StyledInput>
  )
}

export default Input
