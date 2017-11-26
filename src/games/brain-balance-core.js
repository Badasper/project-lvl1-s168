import { getRandom, playGame, getBalanceNumber, cons } from '..';

export default () => {
  const rule = 'Balance the given number.';
  return playGame(rule, () => {
    const question = getRandom(100, 10000);
    const answer = getBalanceNumber(question).toString();
    return cons(question, answer);
  });
};

