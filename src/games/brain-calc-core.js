import { getRandom, playGame, getOperator, calcExpression, cons } from '..';

export default () => {
  const rule = 'What is the result of the expression?';
  return playGame(rule, () => {
    const num1 = getRandom(1, 50);
    const num2 = getRandom(1, 50);
    const operator = getOperator(getRandom(1, 3));
    const question = `${num1} ${operator} ${num2}`;
    const answer = calcExpression(num1, num2, operator).toString();
    return cons(question, answer);
  });
};
