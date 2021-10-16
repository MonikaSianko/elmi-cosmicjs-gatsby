export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getEntries = content => {
  Object.entries(content).map(([key, value]) => key + "_" + value)
}
