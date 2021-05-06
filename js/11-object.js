/*
Objektas: key-value poru rinkinys (raktazodis-reiksme)
*/

const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    likesBanana: true
};

const maryte = {
    name: 'Maryte',
    age: 87,
    color: 'red',
    likesBanana: false
};

// console.log(petras.name);
// console.log(maryte.name);
// console.log(petras.age);
// console.log(maryte.age);
// console.log(petras.color);
// console.log(maryte.color);

const gyventojai = [petras, maryte];

console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [
        {
            contry: 'LT',
            price: 99
        },
        {
            contry: 'LV',
            price: 88
        },
        {
            contry: 'EE',
            price: 140
        },
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'Skrybeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 140
    }
}

console.log(kepure.pricing.lt);

/*
Gyvunas:
    varda,
    kailio spalva,
    amziu,
    megstami patiekalai (pavadinimas, svoris, kaloriju kiekis),
    pazymeti medziai ([x, y] koordinates, rusi, auksti)


Gyvunu prekiu parduotuve:
    pavadinimas,
    adresas,
    darbo laikas,
    asortimentas (pavadinimas, kiekis)

*/