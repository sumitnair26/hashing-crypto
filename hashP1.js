/*
     Give me an input string that outputs a SHA-256 hash that starts with 00000 .

     How will i do it?
     Solution : You will have to brute force until you find a value that starts with 00000
*/

const crypto = require("crypto");

function findHashWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputString = input.toString();
        let hash = crypto.createHash('sha256').update(inputString).digest('hex');
        if (hash.startsWith(prefix)) {
            return {input: inputString, hash: hash}
        }
        input ++;
    }
}


const result = findHashWithPrefix('00000');
console.log(result.input);
console.log(result.hash);

