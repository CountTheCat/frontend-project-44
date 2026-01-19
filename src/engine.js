import { greeting, getUserName, getUserAnswer } from './cli.js';

const runGameWithUser = (gameRules, playRound, existingUserName = null) => {
  let userName = existingUserName;
  if (!userName) {
    greeting();
    userName = getUserName();
  } else {
    console.log(`Привет, ${userName}!`);
  }
  
  console.log(gameRules);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = playRound();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' Это не правильный ответ. Правильный ответ это '${correctAnswer}'.`);
      console.log(`Попробуйте еще раз, ${userName}!`);
      return false; 
    }
    console.log('Великолепно!');
  }

  console.log(`С победой, ${userName}!`);
  return true;
};

const runGame = (gameRules, playRound) => runGameWithUser(gameRules, playRound, null);

const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { runGame, runGameWithUser, getRandomNumber};