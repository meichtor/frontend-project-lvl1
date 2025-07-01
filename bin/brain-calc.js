#!/usr/bin/env node
import { calcGame, calcInfo } from '../src/games/calc-game.js'
import { gameHandler } from '../src/index.js'

gameHandler(calcInfo, calcGame)
