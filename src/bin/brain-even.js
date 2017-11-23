#!/usr/bin/env nodejs

import { playGame, tryEvenAnswer } from '..';

playGame('Brain Even', 'Answer "yes" if number even otherwise answer "no".', 3, tryEvenAnswer);
