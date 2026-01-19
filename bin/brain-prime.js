#!/usr/bin/env node

import { playPrimeGame, getGameRules } from '../src/games/prime.js'
import { runGame } from '../src/engine.js'

runGame(getGameRules(), playPrimeGame)
