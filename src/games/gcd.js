import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const difference = Math.abs(num1 - num2);
  return num1 > num2 ? getGcd(difference, num2) : getGcd(num1, difference);
};

const game = () => {
  const number1 = makeRandomNum(1, 100);
  const number2 = makeRandomNum(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => gameFlow(description, game);
