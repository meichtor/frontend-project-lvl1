import readlineSync from 'readline-sync'
import { getRandomInt, isEven } from './math.js'
import { userName } from './cli.js'

const gameStepsCount = 3
const maxRandomNumberSize = 100

export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < gameStepsCount; i += 1) {
    const randomNumber = getRandomInt(maxRandomNumberSize)
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    console.log('Question: ' + randomNumber)

    const answer = readlineSync.question('Your anwser: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
