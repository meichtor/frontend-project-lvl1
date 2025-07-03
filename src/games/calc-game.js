import { getRandomInt } from '../math.js'
import { gameHandler, maxRandomNumber } from '../index.js'

const calcInfo = 'What is the result of the expression?'
const expressions = ['+', '-', '*']

const calcGameData = () => {
  const randomExp = expressions[getRandomInt(0, expressions.length - 1)]
  const randomLeftOperand = getRandomInt(1, maxRandomNumber)
  const randomRightOperand = getRandomInt(1, maxRandomNumber)
  const question = `${randomLeftOperand} ${randomExp} ${randomRightOperand}`

  let correctAnswer

  switch (randomExp) {
    case ('+'): {
      correctAnswer = randomLeftOperand + randomRightOperand
      break
    }
    case ('-'): {
      correctAnswer = randomLeftOperand - randomRightOperand
      break
    }
    case ('*'): {
      correctAnswer = randomLeftOperand * randomRightOperand
      break
    }
  }

  return [question, correctAnswer.toString()]
}

export default () => gameHandler(calcInfo, calcGameData)
