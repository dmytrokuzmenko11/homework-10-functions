

// asking user for numbers
let a = +prompt('Enter A number');
let b = +prompt('Enter B number');


// verification of entered numbers
if (a === '' || a === ' ' || a === 0) {
    a = undefined;
}
if (b === '' || b === ' ' || b === 0) {
    b = undefined;
}
console.log(`A: ${a}, B: ${b}`);
    

// sum function
let c = function sum(a, b) { 
    return a + b; 
}
c(a, b);
console.log(`${c(a, b)} – Result of num function before main function`);


// main function
let mainFunction = function main(a = 2, b = 3, c) {
    return c(a, b);
}
mainFunction(a, b, c);
console.log(`${mainFunction(a, b, c)} – Result of main function`);


// finally
document.write(`Return of main function: ${mainFunction(a, b, c)}`);





