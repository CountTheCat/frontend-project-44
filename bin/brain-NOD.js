#!/usr/bin/env node

import { playNodGame, getGameRules } from '../src/games/nod.js';
import { runGame } from '../src/engine.js';

runGame(getGameRules(), playNodGame);
