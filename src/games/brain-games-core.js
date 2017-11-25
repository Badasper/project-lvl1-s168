import { playGame, getRequest } from '..';

export default () => playGame(0, () => {
  const question = '';
  const answer = '';
  const rule = '';

  return message => getRequest(message, question, answer, rule);
});
