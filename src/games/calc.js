import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'What is the result of the expression?';

const game = () => {
  const number1 = makeRandomNum(1, 100);
  const number2 = makeRandomNum(1, 100);
  const markerOfOperation = makeRandomNum(1, 3);
  let sign;
  let correctAnswer;

  switch (markerOfOperation) {
    case 1:
      sign = '+';
      correctAnswer = number1 + number2;
      break;
    case 2:
      sign = '-';
      correctAnswer = number1 - number2;
      break;
    case 3:
      sign = '*';
      correctAnswer = number1 * number2;
      break;
    // no default
  }

  const problem = `${number1} ${sign} ${number2}`;
  return [problem, String(correctAnswer)];
};

export default () => gameFlow(rules, game);
