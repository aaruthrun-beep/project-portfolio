const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// The chunk of code that creates the empty gradient.
// I will just use string replace on the exact unique variables to ensure a hit!

code = code.replace(/} else \{\s*const emptyGrad = `background: linear-gradient\(135deg, #1a1a1f, #0a0a0f\);`;\s*thumbContentHtml = `<div class="event-thumb" style="\$\{emptyGrad\}"><\/div>`;\s*thumbPreviewHtml = `<div class="preview-thumb" style="\$\{emptyGrad\}"><\/div>`;/g, 
`} else {
                thumbContentHtml = \`<div class="event-thumb" style="\${gradStyle}"></div>\`;
                thumbPreviewHtml = \`<div class="preview-thumb" style="\${gradStyle}"></div>\`;
`);

code = code.replace(/hsl\(\$\{r1\}, 80%, 15%\), hsl\(\$\{r2\}, 80%, 8%\)/g, `hsl(\${r1}, 80%, 30%), hsl(\${r2}, 80%, 15%)`);

// Ensure play button icon is a bit larger and brighter
code = code.replace(/font-size:2rem; text-shadow: 0 0 15px rgba\(0,0,0,0\.8\);/g, `font-size:2.8rem; text-shadow: 0 0 25px rgba(0,0,0,0.9);`);

fs.writeFileSync('main.js', code);
console.log('Fixed thumbnails gradient code!');
