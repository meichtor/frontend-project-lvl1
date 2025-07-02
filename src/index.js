import readlineSync from 'readline-sync'

// constants
export const gameStepsCount = 3
export const maxRandomNumber = 100

export const gameHandler = (gameInfo, getGameData) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  console.log(gameInfo)

  for (let i = 0; i < gameStepsCount; i += 1) {
    const gameData = getGameData()
    const [question, correctAnswer] = gameData

    console.log('Question: ' + question)

    const answer = readlineSync.question('Your anwser: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
