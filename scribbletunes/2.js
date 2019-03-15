'use strict';
const scribble = require('scribbletune');

let cMajor = scribble.clip({
    notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'],
    pattern: 'x-x-x-x-x-x-x-x-'
});

scribble.midi(cMajor, 'second.mid');