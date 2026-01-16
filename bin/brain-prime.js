#!/usr/bin/env node

import { playPrimeGame, getGameRules } from '../src/games/prime.js';
import { runGameWithUser } from '../src/engine.js';
const userName = process.argv[2] || null;
runGameWithUser(getGameRules(), playPrimeGame, userName);
