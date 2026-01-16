#!/usr/bin/env node

import { playEvenGame, getGameRules } from '../src/games/even.js';
import { runGameWithUser } from '../src/engine.js';
const userName = process.argv[2] || null;
runGameWithUser(getGameRules(), playEvenGame, userName);