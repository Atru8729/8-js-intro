/*
TERNARY OPERATOR

klausimas ? teigima : neigiama

*/

const arLyja = false;

const sketis = arLyja ? 'pasiimk' : 'nereikia';    // pasiiimk / nereikia
console.log(sketis);

const s1 = 4 < 2 ? 'daugiau' : 'ne daugiau';
console.log(s1);

let s2 = '';
if (4 < 2) {
    s2 = 'daugiau';
}   else {
    s2 = 'ne daugiau';
}
console.log(s2);