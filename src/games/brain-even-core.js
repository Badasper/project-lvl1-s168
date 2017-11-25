import { getRandom, playGame, cons } from '..';

export default () => playGame(3, 'Answer "yes" if number even otherwise answer "no".', () => {
  const question = getRandom(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
});
