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

console.log('......................');

/*
Arbatos paruosimo procesas:
0) paimti puodeli
1) isideti arbatos
2) isideti saldikli
3) uzpilti vandens
4) ismaisyti
5) gerti
*/

const processStep = 3;

switch (processStep) {
    case 0:
        console.log('paimiti puodeli');
        
    case 1:
        console.log('isideti arbatos');
        
    case 2:
        console.log('uzpilti vandens');
        
    case 3:
        console.log('ismaisyti');
        
    case 5:
        console.log('gerti');
        break;

    default:
        console.log('Neatpazintas procesas');
        break;
}

console.log('.....................');

const stotele = 'Geniu';

switch (stotele) {
    case 'Geniu':
        console.log('Geniu');
    case 'Tremtiniu':
            console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'K. Mindaugo':
        console.log('K. Mindaugo');
    case 'Z. Tiltas':
        console.log('Z. Tiltas');
        break;

    default:
        console.log('Neatpazinta stotele');
        break;    
}