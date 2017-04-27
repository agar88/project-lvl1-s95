import readlineSync from 'readline-sync';

const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  return readlineSync.question('May I have your name? ');
};

export const brainGame = () => {
  console.log(`Hello, ${greeting('')}!`);
};

export const evenGame = () => {
  const minNum = 1;
  const maxNum = 100;

  const rules = 'Answer "yes" if number even otherwise answer "no".\n';
  const userName = greeting(rules);
  console.log(`Hello, ${userName}!\n`);

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

  const result = iter(1);
  console.log(result);
};
