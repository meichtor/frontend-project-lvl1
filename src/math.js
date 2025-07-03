export const isEven = number => number % 2 === 0
export const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
export const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}
