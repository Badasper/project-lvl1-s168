import { playGame, cons } from '..';
import { getRandom, getItemOfProgression } from '../utilites';

export default () => {
  const rule = 'What number is missing in this progression?';
  return playGame(rule, () => {
    const step = getRandom(1, 50);
    const start = getRandom(1, 50);
    const idx = getRandom(0, 9);
    const lenProgression = 10;
    let question = '';
    let count = 0;
    while (count < lenProgression) {
      if (count === idx) {
        question = `${question}.. `;
      } else {
        question = `${question}${getItemOfProgression(start, step, count)} `;
      }
      count += 1;
    }
    const answer = getItemOfProgression(start, step, idx).toString();
    return cons(`Qustion: ${question}`, answer);
  });
};
