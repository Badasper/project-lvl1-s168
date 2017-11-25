import { cons } from 'hexlet-pairs';
import { getRandom, playGame } from '..';

export default () => playGame(3, (message) => {
  const gcd = (a, b) => {
    const maxNum = a > b ? a : b;
    const minNum = a > b ? b : a;
    if (maxNum % minNum === 0) return minNum;
    return gcd(minNum, maxNum % minNum);
  };

  switch (message) {
    case 'QA': {
      const num1 = getRandom(1, 50);
      const num2 = getRandom(1, 50);
      const question = `${num1} ${num2}`;
      const answer = gcd(num1, num2).toString();
      return cons(question, answer);
    }
    case 'rule': return 'Find the greatest common divisor of given numbers.';
    default: return 'error';
  }
});
