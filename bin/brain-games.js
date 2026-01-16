#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

let currentUser = null;
const printBanner = () => {
  console.clear();
  console.log(colors.cyan);
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║' + colors.bright + colors.magenta + '                B R A I N   G A M E S                 ' + colors.reset + colors.cyan + '║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log(colors.reset);
};

const askUserName = () => {
  console.log('\n' + colors.yellow + 'Добро пожаловать в мир тренировки мозга!' + colors.reset);
  const name = readlineSync.question(colors.green + 'Как вас зовут? ' + colors.reset);
  currentUser = name;
  console.log(colors.bright + colors.cyan + `\nПривет, ${name}! Рад видеть вас!` + colors.reset);
  return name;
};


const showMainMenu = () => {
  console.log('\n' + colors.cyan + '══════════════════════════════════════════════════════' + colors.reset);
  console.log(colors.bright + colors.yellow + 'ВЫБЕРИТЕ ИГРУ:' + colors.reset);
  console.log(colors.cyan + '══════════════════════════════════════════════════════' + colors.reset);
  
  const games = [
    { id: '1', name: 'brain-even', description: 'Чётное число?', color: colors.bright + colors.green },
    { id: '2', name: 'brain-calc', description: 'Калькулятор', color: colors.bright + colors.green },
    { id: '3', name: 'brain-nod', description: 'Наибольший общий делитель', color: colors.bright + colors.green },
    { id: '4', name: 'brain-progression', description: 'Арифметическая прогрессия', color: colors.bright + colors.green },
    { id: '5', name: 'brain-prime', description: 'Простое число?', color: colors.bright + colors.green },
    { id: '0', name: 'exit', description: 'Выход', color: colors.bright + colors.red },
  ];

  games.forEach(game => {
    console.log(`  ${game.color}${game.id}. ${game.name.padEnd(20)} ${colors.white}- ${game.description}${colors.reset}`);
  });

  console.log(colors.cyan + '══════════════════════════════════════════════════════' + colors.reset);
  
  const choice = readlineSync.question(`\n${colors.green}Ваш выбор (0-5): ${colors.reset}`);
  return choice;
};

const runGame = (gameName) => {
  const gamePath = join(__dirname, `${gameName}.js`);
  
  console.log(colors.cyan + `\nЗапускаю ${gameName}...` + colors.reset);
  console.log(colors.cyan + '══════════════════════════════════════════════════════' + colors.reset);
  
  const child = spawn('node', [gamePath, currentUser], {
    stdio: 'inherit', });

  child.on('close', () => {
    console.log(colors.cyan + '══════════════════════════════════════════════════════' + colors.reset);
    console.log(colors.yellow + `\nКонец игры` + colors.reset);
    
    readlineSync.question(colors.green + '\nНажмите Enter для возврата в меню...' + colors.reset);
    mainLoop();
  });
};

const mainLoop = () => {
  printBanner();
  
  if (!currentUser) {
    currentUser = askUserName();
  } else {
    console.log(colors.bright + colors.cyan + `\nС возвращением, ${currentUser}!` + colors.reset);
  }

  const choice = showMainMenu();
  
  switch (choice) {
    case '1':
      runGame('brain-even');
      break;
    case '2':
      runGame('brain-calc');
      break;
    case '3':
      runGame('brain-nod');
      break;
    case '4':
      runGame('brain-progression');
      break;
    case '5':
      runGame('brain-prime');
      break;
    case '0':
      console.log(colors.bright + colors.green + '\nДо свидания, ' + currentUser + '! До новых встреч! 🎮' + colors.reset);
      console.log(colors.cyan + '══════════════════════════════════════════════════════' + colors.reset + '\n');
      process.exit(0);
      break;
    default:
      console.log(colors.red + '\nНеверный выбор. Попробуйте снова.' + colors.reset);
      setTimeout(mainLoop, 1000);
  }
};

mainLoop();