const imprime = function(){
    console.log('Olá')
}

const op = 3

switch (op) {
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    case 3: case 4: case 5:
        console.log('Não')
        break;
    default:
        console.log('Número inválido.')
        break;
}