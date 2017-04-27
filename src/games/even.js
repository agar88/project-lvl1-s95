import { randomNumGenerator } from '..';

export default (minNum, maxNum) => {
  const number = randomNumGenerator(minNum, maxNum);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return correctAnswer;
};
