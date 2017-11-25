import { cons } from 'hexlet-pairs';
import { getRandom, playGame } from '..';

export default () => playGame(3, (message) => {
  const isEven = num => num % 2 === 0;

  switch (message) {
    case 'QA': {
      const question = getRandom(1, 100);
      const answer = isEven(question) ? 'yes' : 'no';
      console.log(`${answer} number is ${answer}`);
      return cons(question.toString(), answer);
    }
    case 'rule': return 'Answer "yes" if number even otherwise answer "no".';
    default: return 'error';
  }
});
