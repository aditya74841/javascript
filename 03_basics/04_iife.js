// Immediately Invoked Function Expression (IIFE)

// To remove the Pollution of global scope we use iffe
(function chai() {

    // named iffe (function has name)
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`Db Connected Two ${name}`)
})('Aditya')