const akys = 'green';

switch (akys) {
    case 'blue' :
        console.log('Melynos');
        break;

    case 'green':
        console.log('Zalios');
        break;

    case 'brown':
            console.log('Rudos');
            break;

    default:
        console.log('Neatpazinta spalva');
        break;
}

if (akys === 'blue') {
    console.log('Melynos');
}

console.log('................');

const day = 6;

switch (day) {
    case 1:
    case 2:
    case 3:   
    case 4:
    case 5:
        console.log('Darbo diena');
        break;
    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Neatpazinta savaites diena');
        break;
}