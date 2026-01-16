#!/usr/bin/env node

import { playNodGame, getGameRules } from '../src/games/nod.js';
import { runGameWithUser } from '../src/engine.js';
const userName = process.argv[2] || null;
runGameWithUser(getGameRules(), playNodGame, userName);

