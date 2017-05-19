import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'Balance the given number.';

const balancing = (digits) => {
  const newDigits = digits;
  const minValue = Math.min.apply(null, newDigits);
  const maxValue = Math.max.apply(null, newDigits);

  if (maxValue - minValue > 1) {
    const indexOfMin = newDigits.indexOf(minValue);
    const indexOfMax = newDigits.indexOf(maxValue);
    newDigits[indexOfMin] = minValue + 1;
    newDigits[indexOfMax] = maxValue - 1;
    return balancing(newDigits);
  }

  return newDigits.sort();
};

const game = () => {
  const number = makeRandomNum(10, 9999);
  const digits = String(number).split('').map(num => parseInt(num, 10));
  const balancedDigits = balancing(digits);

  const question = String(number);
  const correctAnswer = balancedDigits.join('');
  return [question, correctAnswer];
};

export default () => gameFlow(description, game);
