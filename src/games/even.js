import { getRandomNumber } from '../engine.js';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number);
  return [number.toString(), correctAnswer];
};
const getGameRules = () => 'Если число четное ответьте "yes" если нет то "no".';
const playEvenGame = () => generateRound();
export { playEvenGame, getGameRules, isEven };