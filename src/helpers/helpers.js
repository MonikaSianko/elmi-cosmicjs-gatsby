// CONSTANTS

export const empty = undefined || "" || null
//FUNCTIONS

export const toBoolean = string => {
  if (string === "true") {
    return true
  } else {
    return false
  }
}
