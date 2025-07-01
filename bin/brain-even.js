#!/usr/bin/env node
import { evenInfo, evenGame } from '../src/games/even-game.js'
import { gameHandler } from '../src/index.js'

gameHandler(evenInfo, evenGame)
