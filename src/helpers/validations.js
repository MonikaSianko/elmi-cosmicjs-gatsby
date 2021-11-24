import { EMAIL, MESSAGE, NAME, SUBJECT } from "../constants/index"

export const inputValidation = (inputValue, inputType) => {
  const emptyText = "cant be empty"
  const incorrectText = "incorrext text"
  const longerText = "text has to be longer than 3"
  const success = "success"
  if (inputValue < 1) {
    return emptyText
  }
  if (inputType === EMAIL) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (inputValue > 0 && !inputValue.match(regex)) {
      return incorrectText
    }
    if (inputValue && inputValue.match(regex)) {
      return success
    }
  }
  if (inputType === NAME) {
    const regex = /^[a-z ,.'-]+$/i
    if (inputValue > 0 && !inputValue.match(regex)) {
      return incorrectText
    }
    if (inputValue && inputValue.match(regex)) {
      return success
    }
  }
  if (inputType === SUBJECT && inputType === MESSAGE) {
    if (inputValue <= 3) {
      return longerText
    }
    if (inputValue > 3) {
      return success
    }
  }
}
