const crypto = require('crypto');

const input = "sumi";

const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);