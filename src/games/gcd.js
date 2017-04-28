import { gameFlow, makeRandomNum } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const makeCondition = () => {
  const number1 = makeRandomNum(1, 100);
  const number2 = makeRandomNum(1, 100);
  return (request) => {
    if (request === 'getNum1') {
      return number1;
    }
    return number2;
  };
};

const convertConditionToText = (condition) => {
  const textOfNum1 = condition('getNum1');
  const textOfNum2 = condition('getNum2');
  return `${textOfNum1} ${textOfNum2}`;
};

const calculateCorrectAnswer = (condition) => {
  const number1 = condition('getNum1');
  const number2 = condition('getNum2');

  const iter = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    }
    const difference = Math.abs(num1 - num2);
    return num1 > num2 ? iter(difference, num2) : iter(num1, difference);
  };

  const result = iter(number1, number2);
  return result;
};

export default () => gameFlow(rules, makeCondition, convertConditionToText, calculateCorrectAnswer);
