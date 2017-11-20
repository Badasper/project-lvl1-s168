import readlineSync from 'readline-sync';

export const askNameOfMan = () => {
  return readlineSync.question("May I have your name? ");
};