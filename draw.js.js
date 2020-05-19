 var readline = require("readline-sync");

// const animals=[
//     ['^__^','(oo)\\_______','(__)\\       )\\/\\','    ||----w |','    ||     ||'],
//     ['  /\\_/\\','=( °w° )=','  )   (  //',' (__ __)//'],
//     ['(\\__/) ','(•ㅅ•)  ','/ 　 づ'],
//     ['/\\___/\\','  . . ',' \\ . /','   -  ']
// ]


// let question = readline.question("What's up dude ?");

// drawResponse()
// drawAnimal();

// function drawResponse (){
//     let wordDrawUp='';
//     for (let i = 0; i<= question.length+1; i++) {
//         wordDrawUp = wordDrawUp + '-'
//     }
//     return console.log('\n' +' ' + wordDrawUp + '\n' + '< ' + question + ' >' + '\n' + ' ' + wordDrawUp)
// }

// function drawAnimal() {
//     let space =[' '];
//     const randomNumberOfListAnimals = Math.floor(Math.random() * animals.length);
//     const animal = animals[randomNumberOfListAnimals]
//     for ( let i=0; i<animal.length; i++) {
//         console.log('     '+animal[i])
//     }
//     console.log('\n')
// }

// ----------------------------------------------------------------------------------------------------------------------

// Draw rectangle triangle:

// const height = 10;
// const drawTriangleByRows = [];

// for (i = 0; i < height; i++) {
//     for (j = 0; j < i + 1; j++) {
//         drawTriangleByRows.push(' '+'*'+' ')
//     }
//     console.log(drawTriangleByRows.join(''));
//     drawTriangleByRows.splice('');
// }

// ----------------------------------------------------------------------------------------------------------------------

// Draw square:

// const height = 10;
// const drawSquareByRows = [];

// for (i = 0; i < height; i++) {
//     for (j = 0; j < height; j++) {
//         drawSquareByRows.push(' '+'*'+' ')
//     }
//     console.log(drawSquareByRows.join(''));
//     drawSquareByRows.splice('');
// }

// ----------------------------------------------------------------------------------------------------------------------

// Draw inverse rectangle triangle:

// const height = 10;
// const drawTriangleByRows = [];

// for (i = 0; i < height; i++) {
//     for (j = height; j >= i+1; j--) {
//         drawTriangleByRows.push(' '+'*'+' ')
//     }
//     console.log(drawTriangleByRows.join(''));
//     drawTriangleByRows.splice('');
// }

// ----------------------------------------------------------------------------------------------------------------------

//Draw isosceles triangle:

// const height = 10;
// const drawTriangleByRows = [];

// for (i = 0; i < height; i++) {
//     for (j = 0; j < height + i ; j++) {
//         if (j < (height - 1 -i)) {
//             drawTriangleByRows.push(' '+' '+' ')
//         } else {
//             drawTriangleByRows.push(' '+'*'+' ')
//         }
//     }
//     console.log(drawTriangleByRows.join(''));
//     drawTriangleByRows.splice('');
// }

// ----------------------------------------------------------------------------------------------------------------------
// The goal is to encrypt a message using Caesar encryption with an interval
// Cesar Code :

let txt = "Hello World !";
const interval = 3;

const accents = "àâéèêîôùç";
const vowelsFrench = "aaeeeiouc"
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let text = [...txt.toLowerCase()].map(c => accents.includes(c) ? vowelsFrench[accents.indexOf(c)] : c)
    .join('')
    .replace(/[^a-z]/g, '')
    .toLocaleUpperCase();

const cesarCode = (c, interval) => {
    return (
        alphabet[(interval + alphabet.indexOf(c) + 26 ) % 26]
    )
}

const cesardecode = (c, interval) => {
    return (
        alphabet[(alphabet.indexOf(c) - interval + 26) % 26]
    )
}

const code = (text, interval) => [...text].map(c => cesarCode(c, interval)).join('');
const codedText = code(text, interval);

const decode = (codedText, interval) => [...codedText].map(c => cesardecode(c, interval)).join('');
const decodedText = decode(codedText, interval);

console.log(codedText);
console.log(decodedText);