import readlineSync from 'readline-sync';

export const askAny = question => readlineSync.question(`${question}`);

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;
