import { getRandom, playGame, gcd, cons } from '..';

export default () => playGame(3, 'Find the greatest common divisor of given numbers.', () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return cons(question, answer);
});
