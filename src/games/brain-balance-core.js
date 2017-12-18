import { cons } from 'hexlet-pairs';
import playGame from '..';
import { getRandom, getBalanceNumber } from '../utilites';

export default () => {
  const rule = 'Balance the given number.';
  return playGame(rule, () => {
    const question = getRandom(100, 10000);
    const answer = getBalanceNumber(question).toString();
    return cons(`Qustion: ${question}`, answer);
  });
};

