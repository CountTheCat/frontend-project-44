import { getRandomNumber } from '../engine.js'
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getRandomOperator = () => {
  const operators = Object.keys(operations)
  const randomIndex = getRandomNumber(0, operators.length - 1)
  return operators[randomIndex]
}

const generateRound = () => {
  const number1 = getRandomNumber(1, 25)
  const number2 = getRandomNumber(1, 25)
  const operator = getRandomOperator()
  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = String(operations[operator](number1, number2))
  return [question, correctAnswer]
}

const getGameRules = () => 'What is the result of the expression?'
const playCalcGame = () => generateRound()
export { playCalcGame, getGameRules }
