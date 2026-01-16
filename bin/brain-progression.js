#!/usr/bin/env node

import { playProgressionGame, getGameRules } from '../src/games/progression.js';
import { runGameWithUser } from '../src/engine.js';
const userName = process.argv[2] || null;
runGameWithUser(getGameRules(), playProgressionGame, userName);
