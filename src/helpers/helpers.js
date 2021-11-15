// CONSTANTS

export const empty = undefined || "" || null
export const homePl = "Strona główna"
export const homeEn = "Home"
//FUNCTIONS

export const toBoolean = string => {
  if (string === "true") {
    return true
  } else {
    return false
  }
}
