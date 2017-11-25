import { getRandom, playGame, cons } from '..';

export default () => playGame(() => {
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
  const correctAnswer = getBalance(question);
  const stopCount = 3;
  const head = cons('Balance the given number.', stopCount);
  const body = cons(question, correctAnswer);
  return cons(head, body);
});
