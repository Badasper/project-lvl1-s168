import { getRandom, playGame, cons } from '..';

export default () => playGame(() => {
  const gcd = (a, b) => {
    const maxNum = a > b ? a : b;
    const minNum = a > b ? b : a;
    if (maxNum % minNum === 0) return minNum;
    return gcd(minNum, maxNum % minNum);
  };

  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  const stopCount = 3;
  const head = cons('Find the greatest common divisor of given numbers.', stopCount);
  const body = cons(question, correctAnswer.toString());
  return cons(head, body);
});
