const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

const regex = /projects\.forEach\(\(project,\s*index\)\s*=>\s*\{[\s\S]*?(?=\/\/ Hover effects)/;

const newCode = `projects.forEach((project, index) => {
        const color = CATEGORY_COLORS[project.category];
        const label = CATEGORY_LABELS[project.category];
        const hasImages = project.images && project.images.length > 0;
        let thumbUrl = null;
        let thumbIsVideo = false;

        if (hasImages) {
            thumbUrl = encodeImagePath(project.images[0]);
            thumbIsVideo = typeof isVideo === 'function' ? isVideo(thumbUrl) : (thumbUrl.match(/\\.(mp4|webm|avi|mkv)$/i) !== null);
        }

        // Year divider
        if (project.year !== lastYear) {
            lastYear = project.year;
            const divider = document.createElement('div');
            divider.className = 'year-divider';
            divider.innerHTML = \\`<span>\${project.year}</span>\\`;
            $timeline.appendChild(divider);
            fadeObserver.observe(divider);
        }

        const el = document.createElement('div');
        el.className = 'event';
        el.setAttribute('data-category', project.category);
        el.style.transitionDelay = \\`\${(index % 2) * 0.08}s\\`;

        const tagsHtml = project.tags.map(t => \\`<span class="tag">\${t}</span>\\`).join('');

        let thumbContentHtml = '';
        let thumbPreviewHtml = '';

        if (thumbUrl && !thumbIsVideo) {
            thumbContentHtml = \\`<div class="event-thumb" style="background-image:url('\${thumbUrl}')"></div>\\`;
            thumbPreviewHtml = \\`<div class="preview-thumb" style="background-image:url('\${thumbUrl}')"></div>\\`;
        } else {
            const r1 = Math.floor(Math.random() * 360);
            const r2 = r1 + 45;
            const gradStyle = \\`background: linear-gradient(135deg, hsl(\${r1}, 80%, 15%), hsl(\${r2}, 80%, 8%)); display:flex; align-items:center; justify-content:center;\\`;
            const iconHtml = thumbIsVideo ? \\`<span style="color:rgba(255,255,255,0.8); font-size:2rem; text-shadow: 0 0 15px rgba(0,0,0,0.8);">▶</span>\\` : '';
            if (hasImages || thumbIsVideo) {
                thumbContentHtml = \\`<div class="event-thumb" style="\${gradStyle}">\${iconHtml}</div>\\`;
                thumbPreviewHtml = \\`<div class="preview-thumb" style="\${gradStyle}">\${iconHtml}</div>\\`;
            } else {
                const emptyGrad = \\`background: linear-gradient(135deg, #1a1a1f, #0a0a0f);\\`;
                thumbContentHtml = \\`<div class="event-thumb" style="\${emptyGrad}"></div>\\`;
                thumbPreviewHtml = \\`<div class="preview-thumb" style="\${emptyGrad}"></div>\\`;
            }
        }

        el.innerHTML = \\`
            <div class="event-dot" style="background:\${color}; box-shadow: 0 0 12px \${color}60, inset 0 0 5px \${color}a0;"></div>
            <div class="event-card">
                \${thumbContentHtml}
                <div class="event-card-body">
                    <span class="event-date">\${project.date}</span>
                    <span class="event-category-tag" style="color:\${color}; border-color:\${color}30; box-shadow: 0 0 10px \${color}15;">\${label}</span>
                    <h3 class="event-title" id="proj-\${project.id}" tabindex="0"
                        onclick="openProject(\${project.id})"
                        onkeydown="if(event.key==='Enter') openProject(\${project.id})">
                        \${project.title}
                    </h3>
                    <div class="event-tags">\${tagsHtml}</div>
                </div>
            </div>
            <div class="preview-card" style="border-top: 2px solid \${color}; box-shadow: 0 10px 40px \${color}15;">
                <div class="preview-card-accent" style="background:linear-gradient(90deg,\${color},\${color}00);"></div>
                \${thumbPreviewHtml}
                <div class="preview-card-title">\${project.title}</div>
                <p>\${project.shortDesc}</p>
                <div class="tags">\${tagsHtml}</div>
            </div>
        \\`;

        `;
code = code.replace(regex, newCode);
fs.writeFileSync('main.js', code);
console.log('Fixed thumbnails!');
