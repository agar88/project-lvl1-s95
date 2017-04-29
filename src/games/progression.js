import gameFlow from '..';
import makeRandomNum from '../utils';

const description = 'What number is missing in this progression?';

const game = () => {
  const firstNumber = makeRandomNum(1, 10);
  const stepWidth = makeRandomNum(2, 10);
  const indexOfHidden = makeRandomNum(2, 9);

  const makeProgression = (i, acc) => {
    if (i === 9) {
      return acc;
    }
    const nextNumber = acc[i] + stepWidth;
    return makeProgression(i + 1, acc.concat(nextNumber));
  };

  const progression = makeProgression(0, [firstNumber]);
  const correctAnswer = progression[indexOfHidden];

  const toHidden = (num) => {
    const newEl = num !== correctAnswer ? num : '..';
    return newEl;
  };

  const progressionWithHidden = progression.map(toHidden);
  const question = progressionWithHidden.join(' ');

  return [question, String(correctAnswer)];
};

export default () => gameFlow(description, game);
