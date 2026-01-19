import { getRandomNumber } from '../engine.js';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number);
  return [number.toString(), correctAnswer];
};
const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const playEvenGame = () => generateRound();
export { playEvenGame, getGameRules, isEven };