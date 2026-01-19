#!/usr/bin/env node

import { playgcdGame, getGameRules } from '../src/games/gcd.js'
import { runGame } from '../src/engine.js'

runGame(getGameRules(), playgcdGame)
