/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==

SABLONAI:
if () {}
if () {} else {}

*/

const a = 'labas';
const b = 'Labas';

if (a === b) {
    console.log('taip');
} else {
    console.log('ne');
}



const akys = 'melynos';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva...')
}

console.log('......................');

const parosMetas = 'diena';

  