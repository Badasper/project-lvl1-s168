import { cons } from 'hexlet-pairs';
import playGame from '..';
import { getRandom, gcd } from '../utilites';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  return playGame(rule, () => {
    const num1 = getRandom(1, 50);
    const num2 = getRandom(1, 50);
    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2).toString();
    return cons(`Qustion: ${question}`, answer);
  });
};
