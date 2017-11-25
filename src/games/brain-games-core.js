import { playGame } from '..';

export default () => playGame(0, () => {
  const question = '';
  const answer = '';
  const rule = '';
  return (message) => {
    switch (message) {
      case 'question': return question;
      case 'answer': return answer;
      case 'rule': return rule;
      default: return 'error';
    }
  };
});
