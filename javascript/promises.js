/*
 * How to write your own promises in ES6
 */
let delay = (time) => {
    return new Promise((resolve, reject) => {
        if(isNaN(time)){
            reject("Parameter is not a number");
        }
	    setTimeout(resolve, time);
    });
}

let sayHello = () => {
    console.log("hello world");
}

// Erfolgreich
delay(3000).then(() => {
    sayHello();
}).catch(err => console.log(err));

// Wirft Fehler bei falscher Parameterübergabe
delay('200sa0').then(() => {
    sayHello();
}).catch(err => console.log(err));