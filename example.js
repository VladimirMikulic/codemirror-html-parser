const { parse } = require('./dist');
const res = parse('<span class="cm-type">#include <stdio.h></span>');

console.log(res.childNodes);
console.log('Result', res.rawText);
