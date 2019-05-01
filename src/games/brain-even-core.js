import playGame from '..';
import { getRandom } from '../utilites';

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(rule, () => {
    const question = getRandom(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question: `Qustion: ${question}`, correctAnswer };
  });
};
