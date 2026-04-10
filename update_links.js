const fs = require('fs');
const path = require('path');

/**
 * AUTOMATION TOOL: PORTFOLIO VIDEO PATCHER
 * 
 * Instructions:
 * 1. Upload your videos to Cloudinary, Google Drive, or YouTube.
 * 2. Paste the URLs into the 'linkMap' object below.
 * 3. Run: node update_links.js
 */

const linkMap = {
    // EXAMPLES (Replace with your actual links):
    // 1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",           // YouTube
    // 14: "https://drive.google.com/file/d/1A2B3C4D5E/view",      // Google Drive
    // 16: "https://res.cloudinary.com/demo/video/upload/dog.mp4", // Direct Link (Cloudinary/Imgur)
    
    1: "",  // Cat Rover
    14: "", // Robot Arm 2
    16: "", // Robot Arm 3
    18: "", // Battlebot Alpha
};

const MAIN_JS_PATH = path.join(__dirname, 'main.js');

try {
    let mainJs = fs.readFileSync(MAIN_JS_PATH, 'utf8');
    let updatedCount = 0;

    for (const [id, url] of Object.entries(linkMap)) {
        if (!url) continue;

        const projectRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?"images":\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
        
        mainJs = mainJs.replace(projectRegex, (match, prefix, imagesContent, suffix) => {
            if (imagesContent.includes('.mp4') || imagesContent.includes('http')) {
                updatedCount++;
                // Replaces the first video-like or URL-like entry found
                return prefix + imagesContent.replace(/"[^"]*?(\.mp4|youtube|drive|http)[^"]*?"[^,]*/, `"${url}"`) + suffix;
            }
            return match;
        });
    }

    if (updatedCount > 0) {
        fs.writeFileSync(MAIN_JS_PATH, mainJs);
        console.log(`\x1b[32mSUCCESS: Updated ${updatedCount} video links in main.js!\x1b[0m`);
    } else {
        console.log(`\x1b[33mNo updates made. Please paste your links into 'linkMap' in update_links.js\x1b[0m`);
    }

} catch (err) {
    console.error(`\x1b[31mERROR: ${err.message}\x1b[0m`);
}
