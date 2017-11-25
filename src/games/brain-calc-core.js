import { getRandom, playGame, getRequest } from '..';

export default () => playGame(3, () => {
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

  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operator = getOperator(getRandom(1, 3));
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator).toString();
  const rule = 'What is the result of the expression?';

  return message => getRequest(message, question, answer, rule);
});
