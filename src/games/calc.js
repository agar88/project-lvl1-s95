import { randomNumGenerator } from '..';

export default (minNum, maxNum) => {
  const getSymbol = (markerOfOperation) => {
    if (markerOfOperation === 1) {
      return '+';
    } else if (markerOfOperation === 2) {
      return '-';
    }
    return '*';
  };

  const operation = (num1, num2, markerOfOperation) => {
    if (markerOfOperation === 1) {
      return num1 + num2;
    } else if (markerOfOperation === 2) {
      return num1 - num2;
    }
    return num1 * num2;
  };

  const number1 = randomNumGenerator(minNum, maxNum);
  const number2 = randomNumGenerator(minNum, maxNum);
  const markerOfOperation = randomNumGenerator(1, 3);
  const correctAnswer = String(operation(number1, number2, markerOfOperation));
  const symbol = getSymbol(markerOfOperation);

  console.log(`Question: ${number1} ${symbol} ${number2}`);

  return correctAnswer;
};
