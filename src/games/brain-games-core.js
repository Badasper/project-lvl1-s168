import { playGame, cons } from '..';

const getBrainGame = () => {
  const stopCount = 0;
  const head = cons('', stopCount);
  const body = cons('', '');
  return cons(head, body);
};

export default () => playGame(getBrainGame);
