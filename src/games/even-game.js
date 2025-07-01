import { getRandomInt, isEven } from '../math.js'
import { maxRandomNumber } from '../index.js'

export const evenInfo = 'Answer "yes" if the number is even, otherwise answer "no".'

export const evenGame = () => {
  const randomNumber = getRandomInt(maxRandomNumber)
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

  return [randomNumber, correctAnswer]
}
