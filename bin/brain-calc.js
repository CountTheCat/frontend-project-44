#!/usr/bin/env node

import { playCalcGame, getGameRules } from '../src/games/calc.js';
import { runGameWithUser } from '../src/engine.js';
const userName = process.argv[2] || null;
runGameWithUser(getGameRules(), playCalcGame, userName);