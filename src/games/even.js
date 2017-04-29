import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const number = makeRandomNum(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => gameFlow(rules, game);
