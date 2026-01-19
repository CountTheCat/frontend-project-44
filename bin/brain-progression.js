#!/usr/bin/env node

import { playProgressionGame, getGameRules } from '../src/games/progression.js'
import { runGame } from '../src/engine.js'

runGame(getGameRules(), playProgressionGame)
