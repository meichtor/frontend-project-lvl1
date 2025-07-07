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

export const getProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    const currentElement = start + i * step

    progression.push(currentElement)
  }

  return progression
}

export const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}
