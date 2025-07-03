import { getGcd, getRandomInt } from '../math.js'
import { gameHandler, maxRandomNumber } from '../index.js'

export const gcdInfo = 'Find the greatest common divisor of given numbers.'

export const gcdGameData = () => {
  const firstNumber = getRandomInt(0, maxRandomNumber)
  const secondNumber = getRandomInt(0, maxRandomNumber)
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = getGcd(firstNumber, secondNumber)

  return [question, correctAnswer.toString()]
}

export default () => gameHandler(gcdInfo, gcdGameData)
