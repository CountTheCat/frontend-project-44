import { getRandomNumber } from '../engine.js';
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const minLength = 5;
  const maxLength = 10;
  const start = getRandomNumber(1, 100);    
  const step = getRandomNumber(1, 10);      
  const length = getRandomNumber(minLength, maxLength); 
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = progression[hiddenIndex].toString();
  const progressionWithHidden = progression.map((num, index) => 
    index === hiddenIndex ? '..' : num.toString()
  ).join(' ');  
  return [progressionWithHidden, correctAnswer];
};

const getGameRules = () => 'What number is missing in the progression?';
const playProgressionGame = () => generateRound();
export { playProgressionGame, getGameRules, generateProgression };