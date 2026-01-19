import { greeting, getUserName, getUserAnswer } from './cli.js'


const runGame = (gameRules, playRound) => {

  greeting()
  const userName = getUserName()
  console.log(gameRules)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = playRound()

    console.log(`Question: ${question}`)
    const userAnswer = getUserAnswer()


    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export { runGame,  getRandomNumber}
