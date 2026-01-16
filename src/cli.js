import readlineSync from 'readline-sync';


const greeting = () => {
  console.log('Добро пожаловать в Brain games!');
};

const getUserName = () => readlineSync.question('Могу я узнать как тебя зовут? ');
const getUserAnswer = () => readlineSync.question('Твой ответ: ');


const greetUser = (userName) => {
  console.log(`Добро пожаловать в Brain games, ${userName}!`);
};

export { greeting, getUserName, getUserAnswer, greetUser };