import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'Balance the given number.';

const normalization = (digits) => {
  const newDigits = digits;
  const minValue = Math.min.apply(null, newDigits);
  const maxValue = Math.max.apply(null, newDigits);

  if (maxValue - minValue > 1) {
    const indexOfMin = newDigits.indexOf(minValue);
    const indexOfMax = newDigits.indexOf(maxValue);
    newDigits[indexOfMin] = minValue + 1;
    newDigits[indexOfMax] = maxValue - 1;
    return normalization(newDigits);
  }

  return newDigits;
};

const game = () => {
  const number = makeRandomNum(10, 9999);
  const digits = String(number).split('').map(num => parseInt(num, 10));
  const normalizedDigits = normalization(digits);
  const sortedDigits = normalizedDigits.sort();

  const problem = String(number);
  const correctAnswer = sortedDigits.join('');
  return [problem, correctAnswer];
};

export default () => gameFlow(rules, game);
