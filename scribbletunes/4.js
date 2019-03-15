'use strict';
const scribble = require('scribbletune');

//scale gibt eine definierte Skala zurück
let cMajor = scribble.scale('c', 'major');

//C-Major Alternierend
let clip1 = scribble.clip({
    //Diese Arrayfunktion gibt uns aus der Skala die alternierenden Töne zurück
    notes: cMajor.filter((a, x) => x % 2 === 0), 
    pattern: 'x-'.repeat(8) //X- 8x wiederholen
});

//C-Major
let clip2 = scribble.clip({
    notes: cMajor.filter((a, x) => x % 2),
    pattern: 'x-'.repeat(8)
});

scribble.midi(clip1.concat(clip2), 'fourth.mid');