function strCount(str, letter){  
    // reikia kaupiamojo
    let kiekis = 0;

    // einam per teksta
    for (let i = 0; i < str.length; i++){
        // paimame raide
        const raide = str[i];
        console.log(raide)
        // jeigu raide yra ta, kurios ieskau
        if (raide === letter){
            kiekis++;
        }
            // kaupiamasis +1
    }
        

    // grazinam kaupiamaji
    return kiekis
}

console.log(strCount('Hello', 'o'), '->', 1);
console.log(strCount('Hello', 'l'), '->', 2);
console.log(strCount('', 'z'), '->', 0);