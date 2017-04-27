import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';

export const randomNumGenerator = (min, max) => Math.round(((Math.random() * (max - min)) + min));

const askName = () => readlineSync.question('May I have your name? ');

const adRules = (markerOfGame) => {
  if (markerOfGame === 'even') {
    return 'Answer "yes" if number even otherwise answer "no".\n';
  }
  return 'What is the result of the expression?\n';
};

const getGame = (markerOfGame) => {
  if (markerOfGame === 'even') {
    return evenGame;
  }
  return calcGame;
};

const gameTemplate = (markerOfGame) => {
  const minNum = 1;
  const maxNum = 100;
  const currentGame = getGame(markerOfGame);
  const rules = adRules(markerOfGame);

  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = askName();
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count > 3) {
      return `Congratulations, ${userName}!`;
    }
    const correctAnswer = currentGame(minNum, maxNum);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      return `"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
    return iter(count + 1);
  };

  const result = iter(1);
  console.log(result);
};

export const evenGameLauncher = () => gameTemplate('even');
export const calcGameLauncher = () => gameTemplate('calc');
