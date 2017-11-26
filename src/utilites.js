export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

export const getBalanceNumber = (number) => {
  const strNum = number.toString().split('').sort().join('');
  const lastIndex = strNum.length - 1;
  let firstNum = Number(strNum[0]);
  let lastNum = Number(strNum[lastIndex]);

  if (lastNum - firstNum < 2) return Number(strNum);

  const sumOfNums = lastNum + firstNum;
  firstNum = Math.floor(sumOfNums / 2);
  lastNum = sumOfNums - firstNum;
  return getBalanceNumber(Number(`${firstNum}${strNum.substring(1, lastIndex)}${lastNum}`));
};

export const gcd = (num1, num2) => {
  const maxNum = num1 > num2 ? num1 : num2;
  const minNum = num1 > num2 ? num2 : num1;
  if (minNum === 0) return maxNum;
  if (maxNum % minNum === 0) return minNum;
  return gcd(minNum, maxNum % minNum);
};

export const getItemOfProgression = (start, step, idx) => (step * idx) + start;

export const isPrime = (num) => {
  const iter = (acc, number) => {
    if (number % acc === 0 || number <= 0) return false;
    if (acc > number / 2) return true;
    return iter(acc + 1, number);
  };
  return iter(2, num);
};
