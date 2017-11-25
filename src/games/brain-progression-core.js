import { getRandom, playGame, getRequest } from '..';

export default () => playGame(3, () => {
  const step = getRandom(1, 50);
  const start = getRandom(1, 50);
  const idx = getRandom(0, 9);
  let question = '';
  let count = 0;
  while (count < 10) {
    let next = (step * count) + start;
    if (idx === count) next = '..';
    question = `${question} ${next} `;
    count += 1;
  }
  const answer = (start + (step * idx)).toString();
  const rule = 'What number is missing in this progression?';

  return message => getRequest(message, question, answer, rule);
});
