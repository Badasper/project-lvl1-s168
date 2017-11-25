import { getRandom, playGame } from '..';

export default () => playGame(3, () => {
  const getBalance = (strNumber) => {
    const strNum = strNumber.split('').sort().join('');
    const lastIndex = strNum.length - 1;
    let firstNum = Number(strNum[0]);
    let lastNum = Number(strNum[lastIndex]);
    if (lastNum - firstNum < 2) return strNum;
    const sumOfNums = lastNum + firstNum;
    firstNum = Math.floor(sumOfNums / 2);
    lastNum = sumOfNums - firstNum;
    return getBalance(`${firstNum}${strNum.substring(1, lastIndex)}${lastNum}`);
  };
  const question = getRandom(100, 10000).toString();
  const answer = getBalance(question);
  const rule = 'Balance the given number.';
  return (message) => {
    switch (message) {
      case 'question': return question;
      case 'answer': return answer;
      case 'rule': return rule;
      default: return 'error';
    }
  };
});
