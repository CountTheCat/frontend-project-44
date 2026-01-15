const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(randomNumber);
  return [randomNumber.toString(), correctAnswer];
};
const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const playEvenGame = () => generateRound();
export { playEvenGame, getGameRules, isEven };