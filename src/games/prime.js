import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const halfOFNum = num / 2;

  const iter = (i) => {
    if (i > halfOFNum) {
      return true;
    }
    return num % i !== 0 ? iter(i + 1) : false;
  };

  return iter(2);
};

const game = () => {
  const number = makeRandomNum(1, 199);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameFlow(description, game);
