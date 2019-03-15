'use strict';
const scribble = require('scribbletune');

let cMajorAlternate = scribble.clip({
    notes: scribble.scale('c', 'major').filter((a, x) => x % 2 === 0),
    pattern: 'x-x-x-x-x-x-x-x-'
});

scribble.midi(cMajorAlternate, 'third.mid');