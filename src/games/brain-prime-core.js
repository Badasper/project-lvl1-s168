import { playGame, cons } from '..';
import { getRandom, isPrime } from '../utilites';

export default () => {
  const rule = 'Answer \'yes\' if number is prime elese \'no\'.';
  return playGame(rule, () => {
    const question = getRandom(1, 1000);
    const answer = isPrime(question) ? 'yes' : 'no';
    return cons(`Is this number prime? ${question}`, answer);
  });
};

