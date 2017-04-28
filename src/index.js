import readlineSync from 'readline-sync';

export default (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count > 3) {
      return `Congratulations, ${userName}!`;
    }
    const dataRound = game();
    const textOfCondition = dataRound('getText');
    const correctAnswer = dataRound('getAnswer');
    console.log(`Question: ${textOfCondition}`);
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
