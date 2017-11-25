import { getRandom, playGame, cons } from '..';

export default () => playGame(() => {
  const isEven = num => num % 2 === 0;

  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const stopCount = 3;
  const head = cons('Answer "yes" if number even otherwise answer "no".', stopCount);
  const body = cons(question, correctAnswer);
  return cons(head, body);
});
