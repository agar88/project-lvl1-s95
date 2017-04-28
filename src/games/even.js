import { gameFlow, makeRandomNum } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const makeCondition = () => makeRandomNum(1, 100);

const convertConditionToText = condition => String(condition);

const calculateCorrectAnswer = (condition) => {
  const correctAnswer = condition % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

export default () => gameFlow(rules, makeCondition, convertConditionToText, calculateCorrectAnswer);
