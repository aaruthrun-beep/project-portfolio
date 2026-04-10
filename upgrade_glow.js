const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// The original hover handler chunk:
const regex = /el\.addEventListener\('mouseenter',\s*\(\)\s*=>\s*\{\s*dot\.style\.boxShadow\s*=\s*`0 0 0 6px \$\{color\}40, 0 0 22px \$\{color\}55`;\s*card\.style\.borderColor\s*=\s*`\$\{color\}40`;\s*card\.style\.boxShadow\s*=\s*`0 8px 40px \$\{color\}10, 0 0 0 1px \$\{color\}20`;\s*\}\);/;

const newCode = `el.addEventListener('mouseenter', () => {
            dot.style.boxShadow  = \`0 0 12px 4px \${color}80, 0 0 40px 10px \${color}b0, inset 0 0 10px \${color}ff\`;
            card.style.borderColor = \`\${color}a0\`;
            card.style.boxShadow   = \`0 15px 70px \${color}35, 0 0 0 1px \${color}60, 0 0 20px \${color}20\`;
        });`;

code = code.replace(regex, newCode);
fs.writeFileSync('main.js', code);
console.log('Glow replaced!');
