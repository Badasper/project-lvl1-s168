import { playGame, cons } from '..';
import { getRandom, getItemOfProgression } from '../utilites';

const getProgression = (lenProgression, start, step, idx) => {
  let secuence = '';
  let count = 0;
  while (count < lenProgression) {
    if (count === idx) {
      secuence = `${secuence}.. `;
    } else {
      secuence = `${secuence}${getItemOfProgression(start, step, count)} `;
    }
    count += 1;
  }
  return secuence;
};

export default () => {
  const rule = 'What number is missing in this progression?';
  return playGame(rule, () => {
    const step = getRandom(1, 50);
    const start = getRandom(1, 50);
    const idx = getRandom(0, 9);
    const lenProgression = 10;
    const question = getProgression(lenProgression, start, step, idx);
    const answer = getItemOfProgression(start, step, idx).toString();
    return cons(`Qustion: ${question}`, answer);
  });
};
