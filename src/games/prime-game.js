import { getRandomInt, isPrime } from '../math.js'
import { gameHandler } from '../index.js'

const primeInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const primeGameData = () => {
  const randomNumber = getRandomInt(1, 100)
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  const question = randomNumber

  return [question, correctAnswer]
}

export default () => gameHandler(primeInfo, primeGameData)
