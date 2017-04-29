import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const number = makeRandomNum(1, 100);
  const problem = String(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [problem, correctAnswer];
};

export default () => gameFlow(rules, game);
