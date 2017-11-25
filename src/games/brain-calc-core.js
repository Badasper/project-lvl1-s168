import { getRandom, playGame, cons } from '..';

export default () => playGame(() => {
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
  const correctAnswer = getAnswer(num1, num2, operator);
  const stopCount = 3;
  const head = cons('What is the result of the expression?', stopCount);
  const body = cons(question, correctAnswer.toString());
  return cons(head, body);
});
