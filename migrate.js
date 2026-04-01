const fs = require('fs');

if(!fs.existsSync('src/components/home')) {
  fs.mkdirSync('src/components/home', {recursive: true});
}

let code = fs.readFileSync('tmp_react_repo/src/imports/Home.tsx', 'utf-8');

// Remove import img... from "figma:asset..."
code = code.replace(/import\s+(img[\w\d]+)\s+from\s+['"]figma:asset\/[^'"]+['"];?/g, '');

// Replace svgPaths import to point to our newly created file
code = code.replace(/import svgPaths from [\s\S]*?;/, `import { svgPaths } from '../../data/svgData';`);

// Look for usages like {imgFrame5} and replace them with "/images/imgFrame5.png"
code = code.replace(/\{img[A-Za-z0-9]+\}/g, (match) => {
    let varName = match.substring(1, match.length - 1);
    return '"/images/' + varName + '.png"';
});

fs.writeFileSync('src/components/home/ReactHome.tsx', code);
console.log('Transform script completed');
