/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/
let newD6 = document.querySelector('#d6-roll');
newD6.src = 'images/start/d6.png';

let newD12 = document.querySelector('#d12-roll');
newD12.src = 'images/start/d12.jpeg';

let newD20 = document.querySelector('#d20-roll');
newD20.src = 'images/start/d20.jpg';

let newD6Double = document.querySelector('#double-d6-roll-1');
newD6Double.src = 'images/start/d6.png';

let newD6Double2 = document.querySelector('#double-d6-roll-2');
newD6Double2.src = 'images/start/d6.png';



/*******************
 * EVENT LISTENERS *
 *******************/

let secondD6 = document.querySelector('#d6-button').addEventListener('click', D6);
function D6() {
document.querySelector('#d6-roll').src = 'images/d6/${getRandomNumber(6)}.png';
}
// let thirdD6 = document.querySelector('#d6-button').addEventListener('click', D6second);
// function D6second() {
//     document.querySelector('#d6-roll').src = 'images/d6/2.png';
//     }

function iHateMyLife () {
    
    getRandomNumber(6)


}


/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
