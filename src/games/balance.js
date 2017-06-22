import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'Balance the given number.';

const balancing = (digits) => {
  const min = digits.indexOf(Math.min(...digits));
  const max = digits.indexOf(Math.max(...digits));

  const newDigits = digits.slice();
  if (digits[max] - digits[min] > 1) {
    newDigits[min] += 1;
    newDigits[max] -= 1;
    return balancing(newDigits);
  }
  return newDigits.sort();
};

const game = () => {
  const number = makeRandomNum(100, 9999);
  const digits = String(number).split('').map(num => +num);
  const balancedDigits = balancing(digits);

  const question = String(number);
  const correctAnswer = balancedDigits.join('');
  return [question, correctAnswer];
};

export default () => gameFlow(description, game);
