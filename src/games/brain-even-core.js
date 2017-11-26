import { getRandom, playGame, cons } from '..';

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(rule, () => {
    const question = getRandom(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, answer);
  });
};
