import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const greeting = () => `Hello, ${askName()}!`;

export const evenGame = () => {
  const minNum = 1;
  const maxNum = 100;

  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');

  const iter = (count) => {
    if (count > 3) {
      return `Congratulations, ${userName}!`;
    }

    const genNum = Math.round(((Math.random() * (maxNum - minNum)) + minNum));
    const correctAnswer = genNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${genNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
};
