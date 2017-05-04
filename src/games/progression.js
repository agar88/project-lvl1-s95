import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'What number is missing in this progression?';

const makeProgression = () => {
  const firstNumber = makeRandomNum(1, 10);
  const stepWidth = makeRandomNum(2, 10);

  const iter = (i, acc) => {
    if (i === 9) {
      return acc;
    }
    const nextNumber = acc[i] + stepWidth;
    return iter(i + 1, acc.concat(nextNumber));
  };

  return iter(0, [firstNumber]);
};

const game = () => {
  const progression = makeProgression();
  const indexOfHidden = makeRandomNum(2, 9);
  const correctAnswer = progression[indexOfHidden];
  const progressionWithHidden = progression.map(num => (num !== correctAnswer ? num : '..'));
  const question = progressionWithHidden.join(' ');

  return [question, String(correctAnswer)];
};

export default () => gameFlow(description, game);
