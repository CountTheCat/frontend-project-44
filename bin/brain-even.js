#!/usr/bin/env node

import { playEvenGame, getGameRules } from '../src/games/even.js'
import { runGame } from '../src/engine.js'

runGame(getGameRules(), playEvenGame)
