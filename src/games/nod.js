import { getRandomNumber } from '../engine.js';
const calculateNod = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calculateNod(b, a % b);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  
  const correctAnswer = calculateNod(number1, number2);
  const question = `${number1} ${number2}`;
  
  return [question, correctAnswer.toString()];
};
const getGameRules = () => 'Найдите наибольший общий делитель';
const playNodGame = () => generateRound();
export { playNodGame, getGameRules, calculateNod };