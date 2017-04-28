import gameFlow from '..';
import makeRandomNum from '../utils';

const rules = 'What is the result of the expression?\n';

const makeCondition = () => {
  const makeSign = () => {
    const markerOfOperation = makeRandomNum(1, 3);
    switch (markerOfOperation) {
      case 1:
        return '+';
      case 2:
        return '-';
      default:
        return '*';
    }
  };

  const number1 = makeRandomNum(1, 100);
  const number2 = makeRandomNum(1, 100);
  const sign = makeSign();

  return (request) => {
    switch (request) {
      case 'getNum1':
        return number1;
      case 'getNum2':
        return number2;
      default:
        return sign;
    }
  };
};

const convertConditionToText = (condition) => {
  const textOfNum1 = condition('getNum1');
  const textOfNum2 = condition('getNum2');
  const textOfSign = condition('getSign');
  return `${textOfNum1} ${textOfSign} ${textOfNum2}`;
};

const calculateCorrectAnswer = (condition) => {
  const operation = (num1, num2, sign) => {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };

  const number1 = condition('getNum1');
  const number2 = condition('getNum2');
  const sign = condition('getSign');
  const correctAnswer = operation(number1, number2, sign);
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
