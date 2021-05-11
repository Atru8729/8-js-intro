/*
UZDUOTIS
- gaminam pieno kokteilius
- gaunam uzsakymu kieki per diena (vienetais)
- gaunam vienos porcijos dydi (litrais)
- vienos karves duodamo pieno kiekis per diena (litrais)
- reikia rasti, kiek reikia tureti karviu norint patenkinti visus uzsakymus?
*/

function milk(uzsKiekisPerDiena, porcijosDydis, gaunamoPienoKiekis) {
// validation
if(typeof uzsKiekisPerDiena !== 'number') {
    return 'ERROR: pirmas parametras turi buti skaicius';
}
if(typeof porcijosDydis !== 'number') {
    return 'ERROR: antras parametras turi buti skaicius';
}
if(typeof gaunamoPienoKiekis !== 'number') {
    return 'ERROR: trecias parametras turi buti skaicius';
}

if(typeof uzsKiekisPerDiena < 0) {
    return 'ERROR: trecias parametras turi buti skaicius';
}

//logic
const reikiamoPienoKiekis = uzsKiekisPerDiena * porcijosDydis;
const reikiaKarviu = Math.ceil(reikiamoPienoKiekis / gaunamoPienoKiekis);

// return result
return reikiaKarviu;

}

console.log(milk('labas', 0.5, 9));
console.log(milk(100, true, 9));
console.log(milk(100, 0.5, 'pasideram'));
console.log(milk(-100, 0.5, 9));
console.log(milk(100, -0.5));
console.log(milk(100));
console.log(milk());

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);






//console.log(milk());