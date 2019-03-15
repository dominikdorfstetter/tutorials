'use strict';
const scribble = require('scribbletune');


let c = scribble.clip({
    notes: ['c4'],
    pattern: 'x-x-x-x-x-x-x-x-'
});

scribble.midi(c, 'first.mid');