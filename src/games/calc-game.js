import { getRandomInt } from '../math.js'
import { maxRandomNumber } from '../index.js'

export const calcInfo = 'What is the result of the expression?'
const expressions = ['+', '-', '*']

export const calcGame = () => {
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
