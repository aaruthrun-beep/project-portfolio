const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const mainJsPath = path.join(projectDir, 'main.js');

let mainJs = fs.readFileSync(mainJsPath, 'utf8');

// The folders we expect
const folders = fs.readdirSync(projectDir).filter(f => fs.statSync(path.join(projectDir, f)).isDirectory());

// Replace images: [] or images: [...] with actual images
mainJs = mainJs.replace(/folder:\s*"(.*?)",([\s\S]*?)images:\s*\[([\s\S]*?)\]/g, (match, folderName, middlePart, oldImages) => {
    let imagesContent = '';
    const folderPath = path.join(projectDir, folderName);
    
    // Check if the folder exists
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png|gif|webp|mp4|webm|avi)$/i));
        
        if (imageFiles.length > 0) {
            imagesContent = '\n' + imageFiles.map(img => `            "${folderName}/${img}"`).join(',\n') + '\n        ';
        }
    }
    
    // Special case for 'veel koothu' which might actually be one of the folders but mapped differently?
    // Let's just blindly push them if found
    return `folder:   "${folderName}",${middlePart}images: [${imagesContent}]`;
});

fs.writeFileSync(mainJsPath, mainJs);
console.log('Images updated successfully!');
