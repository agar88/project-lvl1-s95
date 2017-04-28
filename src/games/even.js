import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const makeCondition = () => makeRandomNum(1, 100);

const convertConditionToText = condition => String(condition);

const calculateCorrectAnswer = (condition) => {
  const correctAnswer = condition % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const game = () => {
  const condition = makeCondition();
  const textOfCondition = convertConditionToText(condition);
  const correctAnswer = calculateCorrectAnswer(condition);

  return (request) => {
    if (request === 'getText') {
      return textOfCondition;
    }
    return correctAnswer;
  };
};

export default () => gameFlow(rules, game);
