import { getRandom, playGame, getBalanceNumber, cons } from '..';

export default () => playGame('Balance the given number.', () => {
  const question = getRandom(100, 10000);
  const answer = getBalanceNumber(question).toString();
  return cons(question, answer);
});
