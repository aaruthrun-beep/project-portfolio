const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

const target1 = `            <div class="event-card">`;
const replace1 = `            <div class="event-card" id="proj-\${project.id}" tabindex="0"
                 onclick="openProject(\${project.id})"
                 onkeydown="if(event.key==='Enter') openProject(\${project.id})"
                 style="cursor: pointer;">`;

const target2 = `                    <h3 class="event-title" id="proj-\${project.id}" tabindex="0"
                        onclick="openProject(\${project.id})"
                        onkeydown="if(event.key==='Enter') openProject(\${project.id})">
                        \${project.title}
                    </h3>`;
const replace2 = `                    <h3 class="event-title">
                        \${project.title}
                    </h3>`;

const target3 = `bindCursorHover('.event-title');`;
const replace3 = `bindCursorHover('.event-card');`;

code = code.replace(target1, replace1);
code = code.replace(target2, replace2);
code = code.replace(target3, replace3);

fs.writeFileSync('main.js', code);
console.log('Applied click expansion fix successfully.');
