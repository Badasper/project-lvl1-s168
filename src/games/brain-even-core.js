import { getRandom, playGame, getRequest } from '..';

export default () => playGame(3, () => {
  const question = getRandom(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const rule = 'Answer "yes" if number even otherwise answer "no".';

  return message => getRequest(message, question, answer, rule);
});
