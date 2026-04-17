const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/transition-alláá/g, 'transition-all');
    content = content.replace(/¿quééééé/g, 'qué');
    content = content.replace(/¿quéééé/g, 'que');
    content = content.replace(/allááá/g, 'allá');
    
    // Testimonial specific text in ReactSolutionsPage.tsx has similar corruption:
    // "Mi experiencia ha sido de más de cinco estrellas..."

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed', filePath);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.md')) {
            fixFile(fullPath);
        }
    }
}

traverseDir(path.join(__dirname, 'src'));
console.log('Done');
