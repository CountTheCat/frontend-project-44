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
  const start = Math.floor(Math.random() * 100) + 1;    
  const step = Math.floor(Math.random() * 10) + 1;      
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; 
  
  const progression = generateProgression(start, step, length);
  
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex].toString();
  const progressionWithHidden = progression.map((num, index) => 
    index === hiddenIndex ? '..' : num.toString()
  ).join(' ');  
  return [progressionWithHidden, correctAnswer];
};

const getGameRules = () => 'Какое число пропущено в последовательности?';
const playProgressionGame = () => generateRound();

export { playProgressionGame, getGameRules, generateProgression };