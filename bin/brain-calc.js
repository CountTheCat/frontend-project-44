#!/usr/bin/env node

import { playCalcGame, getGameRules } from '../src/games/calc.js'
import { runGame } from '../src/engine.js'
runGame(getGameRules(), playCalcGame)
