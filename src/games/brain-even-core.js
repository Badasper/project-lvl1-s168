import { getRandom, isEven, askAny, playGame } from '..';

export const tryEvenAnswer = (name) => {
  const randomNumber = getRandom(1, 100);
  console.log(`Question: ${randomNumber}`);
  const ans = askAny('Your answer:  ');
  const correct = isEven(randomNumber) ? 'yes' : 'no';
  if (ans === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default () => playGame('Brain Even', 'Answer "yes" if number even otherwise answer "no".', 3, tryEvenAnswer);
