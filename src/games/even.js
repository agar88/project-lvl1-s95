import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const number = makeRandomNum(1, 100);
  const question = String(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameFlow(description, game);
