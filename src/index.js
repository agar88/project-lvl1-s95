import readlineSync from 'readline-sync';

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count > 3) {
      return `Congratulations, ${userName}!`;
    }
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
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
