import { playGame, cons } from '..';

export const getBrainGame = () => {
  const stopCount = 0;
  const head = cons('', stopCount);
  const body = cons('', '');
  return cons(head, body);
};

export default () => playGame(getBrainGame);
