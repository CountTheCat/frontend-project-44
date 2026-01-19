#!/usr/bin/env node
import {greeting, getUserName} from '../src/cli.js';

greeting(); 
const userName = getUserName();

console.log(`Hello, ${userName} !`);

