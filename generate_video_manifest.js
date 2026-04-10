const fs = require('fs');

try {
    const mainJs = fs.readFileSync('main.js', 'utf8');
    
    // Find all IDs, titles, and video paths using a simple scan
    const lines = mainJs.split('\n');
    let currentProject = "";
    let currentId = "";

    console.log("\n\x1b[36m--- PORTFOLIO VIDEO MANIFEST ---\x1b[0m");

    lines.forEach(line => {
        const idMatch = line.match(/id:\s*(\d+)/);
        const titleMatch = line.match(/title:\s*"(.*?)"/);
        const videoMatch = line.match(/"([^"]*?\.(mp4|webm|avi|mkv))"/i);

        if (idMatch) currentId = idMatch[1];
        if (titleMatch) currentProject = titleMatch[1];
        
        if (videoMatch) {
            if (currentProject) {
                console.log(`\x1b[33mProject ${currentId}: ${currentProject}\x1b[0m`);
                currentId = ""; // Only print title once
                currentProject = "";
            }
            console.log(`  [ ] ${videoMatch[1]}`);
        }
    });

} catch (err) {
    console.error("Error generating manifest:", err.message);
}
