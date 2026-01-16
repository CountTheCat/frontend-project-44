const isPrime = (num) => {
 if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i += 1) {
 if (num % i === 0) return false;
}
return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

const getGameRules = () => 'Если число простое ответьте "yes" если же нет то "no".';
const playPrimeGame = () => generateRound();
export { playPrimeGame, getGameRules, isPrime };