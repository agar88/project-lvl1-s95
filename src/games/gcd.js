import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = makeRandomNum(1, 100);
  const number2 = makeRandomNum(1, 100);

  const iter = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    }
    const difference = Math.abs(num1 - num2);
    return num1 > num2 ? iter(difference, num2) : iter(num1, difference);
  };

  const problem = `${number1} ${number2}`;
  const correctAnswer = iter(number1, number2);
  return [problem, String(correctAnswer)];
};

export default () => gameFlow(rules, game);
