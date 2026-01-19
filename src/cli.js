import readlineSync from 'readline-sync'

const greeting = () => {
  console.log('Welcome to the Brain Games!')
}

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}
const getUserAnswer = () => readlineSync.question('Your answer: ')

export { greeting, getUserName, getUserAnswer }
