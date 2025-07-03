import { getProgression, getRandomInt } from '../math.js'
import { gameHandler } from '../index.js'

const progressionInfo = 'What number is missing in the progression?'
const [stepMin, stepMax] = [1, 5]
const [startMin, startMax] = [0, 100]
const [lengthMin, lengthMax] = [5, 15]

const progressionGameData = () => {
  const progressionStart = getRandomInt(startMin, startMax)
  const progressionStep = getRandomInt(stepMin, stepMax)
  const progressionLength = getRandomInt(lengthMin, lengthMax)
  const progression = getProgression(progressionStart, progressionStep, progressionLength)
  const randomProgressionIndex = getRandomInt(0, progression.length - 1)
  const correctAnswer = progression[randomProgressionIndex].toString()
  const question = progression.join(' ').replace(correctAnswer, '..')

  return [question, correctAnswer]
}

export default () => gameHandler(progressionInfo, progressionGameData)
