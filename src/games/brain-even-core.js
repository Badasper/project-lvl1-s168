import { getRandom, playGame } from '..';

export default () => playGame(3, () => {
  const isEven = num => num % 2 === 0;
  const question = getRandom(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  const rule = 'Answer "yes" if number even otherwise answer "no".';

  return (message) => {
    switch (message) {
      case 'question': return question;
      case 'answer': return answer;
      case 'rule': return rule;
      default: return 'error';
    }
  };
});
