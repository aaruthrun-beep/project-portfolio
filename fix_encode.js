const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

code = code.replace(
    "return path.split('/').map(encodeURIComponent).join('/');",
    "return path.split('/').map(encodeURIComponent).join('/').replace(/'/g, '%27');"
);

fs.writeFileSync('main.js', code);
console.log('Fixed encodeImagePath!');
