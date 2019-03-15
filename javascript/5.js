let name = "Dominik";

// Die Rückwärts gerichteten Kommata erlauben mehrzeilige
// Strings. Ein Dollar-Zeichen gefolgt von geschwungenen
// Klammern mit einem Variablennamen dazwischen, interpretiert
// die angegebene Variable.
let sagHallo = `
    Hallo ich bin der ${name}!

    Ich liebe das Programmieren wie einen guten Freund.
`;

console.log(sagHallo);
