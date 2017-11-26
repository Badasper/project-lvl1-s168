import { getRandom, playGame, getProgression, cons } from '..';

export default () => {
  const rule = 'What number is missing in this progression?';
  return playGame(rule, () => {
    const step = getRandom(1, 50);
    const start = getRandom(1, 50);
    const idx = getRandom(0, 9);
    const question = getProgression(start, step, idx);
    const answer = (start + (step * idx)).toString();
    return cons(question, answer);
  });
};
