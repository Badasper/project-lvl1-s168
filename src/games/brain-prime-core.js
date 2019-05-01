import playGame from '..';
import { getRandom, isPrime } from '../utilites';

export default () => {
  const rule = 'Answer \'yes\' if number is prime elese \'no\'.';
  return playGame(rule, () => {
    const question = getRandom(1, 1000);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question: `Qustion: ${question}`, correctAnswer };
  });
};

