import readlineSync from 'readline-sync';

export const makeRandomNum = (min, max) => Math.round(((Math.random() * (max - min)) + min));

export const gameFlow = (rules, makeCondition, convertConditionToText, calculateCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count > 3) {
      return `Congratulations, ${userName}!`;
    }

    const condition = makeCondition();
    const textOfCondition = convertConditionToText(condition);
    console.log(`Question: ${textOfCondition}`);
    const correctAnswer = String(calculateCorrectAnswer(condition));
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
