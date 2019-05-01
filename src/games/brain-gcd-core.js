import playGame from '..';
import { getRandom, gcd } from '../utilites';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  return playGame(rule, () => {
    const num1 = getRandom(1, 50);
    const num2 = getRandom(1, 50);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return { question: `Qustion: ${question}`, correctAnswer };
  });
};
