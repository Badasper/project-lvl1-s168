import readlineSync from 'readline-sync';

export const askAny = question => readlineSync.question(`${question}`);

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

export const isEven = (num) => {
  const qry = (num % 2 === 0);
  return qry ? 'yes' : 'no';
};
