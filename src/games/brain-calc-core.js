import { cons } from 'hexlet-pairs';
import { getRandom, playGame } from '..';

export default () => playGame(3, (message) => {
  const getOperator = (num) => {
    switch (num) {
      case 1: return '+';
      case 2: return '-';
      case 3: return '*';
      default: return 'error';
    }
  };
  const getAnswer = (numA, numB, operator) => {
    switch (operator) {
      case '+': return numA + numB;
      case '-': return numA - numB;
      case '*': return numA * numB;
      default: return 'error';
    }
  };

  switch (message) {
    case 'QA': {
      const num1 = getRandom(1, 50);
      const num2 = getRandom(1, 50);
      const operator = getOperator(getRandom(1, 3));
      const question = `${num1} ${operator} ${num2}`;
      const answer = getAnswer(num1, num2, operator).toString();
      return cons(question, answer);
    }
    case 'rule': return 'What is the result of the expression?';
    default: return 'error';
  }
});
