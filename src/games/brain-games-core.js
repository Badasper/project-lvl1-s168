import { playGame, cons } from '..';

export default () => playGame(() => {
  const stopCount = 0;
  const head = cons('', stopCount);
  const body = cons('', '');
  return cons(head, body);
});
