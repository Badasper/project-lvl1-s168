import { cons } from 'hexlet-pairs';
import { playGame } from '..';

export default () => playGame(0, (message) => {
  switch (message) {
    case 'rule': return '';
    case 'QA': return cons('', '');
    default: return 'error';
  }
});
