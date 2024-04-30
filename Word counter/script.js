// VARIABLE DECLARATION

let input = document.querySelector('.input');
let chars = document.querySelector('.c1');
let char = document.querySelector('.c2');
let word = document.querySelector('.c3');

function countCharactersWithSpaces(input) {
    return input.length;
}

function countCharactersWithoutSpaces(input) {
    let withoutSpaces = input.replace(/\s/g, '');
    return withoutSpaces.length;
}

function wordCount(input) {
    const arr = input.trim().split(/\s+/);
    return arr.length;
}

input.addEventListener('input', function() {
    let text = this.value;
    chars.textContent = countCharactersWithSpaces(text);
    char.textContent = countCharactersWithoutSpaces(text);

    word.textContent = wordCount(text);
    
});