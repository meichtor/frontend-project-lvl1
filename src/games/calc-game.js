import { getRandomInt } from '../math.js'
import { gameHandler, maxRandomNumber } from '../index.js'

const calcInfo = 'What is the result of the expression?'
const expressions = ['+', '-', '*']

const calcGameData = () => {
  const randomExp = expressions[getRandomInt(expressions.length)]
  const randomLeftOperand = getRandomInt(maxRandomNumber)
  const randomRightOperand = getRandomInt(maxRandomNumber)
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
