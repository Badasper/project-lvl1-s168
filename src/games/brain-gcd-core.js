import { getRandom, playGame, getRequest } from '..';

export default () => playGame(3, () => {
  const gcd = (a, b) => {
    const maxNum = a > b ? a : b;
    const minNum = a > b ? b : a;
    if (maxNum % minNum === 0) return minNum;
    return gcd(minNum, maxNum % minNum);
  };

  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  const rule = 'Find the greatest common divisor of given numbers.';
  return message => getRequest(message, question, answer, rule);
});
