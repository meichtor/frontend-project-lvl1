import readlineSync from 'readline-sync'

export const showWelcomeMessage = () => console.log('Welcome to the Brain Games!')

export const userName = readlineSync.question('May I have your name? ')

export const greetingWithName = () => console.log('Hello, ' + userName + '!')
