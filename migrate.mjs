import fs from 'fs';

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

// EXTRACT FOOTER HTML
// Using a better regex that captures the footer content precisely
const footerRegex = /<div className="bg-\[#080813\] content-stretch flex flex-col gap-\[40px\] items-center mb-\[-2px\] overflow-clip px-\[240px\] py-\[120px\] relative shrink-0 w-\[1920px\]" data-name="Footer">([\s\S]+?)<\/div>\s+<div className="absolute bottom-0 h-\[10766.6025390625px\]/;
const footerMatch = code.match(footerRegex);
let footerInnerHtml = footerMatch ? footerMatch[1] : '';

if (!footerMatch) {
    console.error('Could not find footer using regex');
}

// Make Footer responsive and unique
let figmaFooterContent = `export function FigmaFooter() {
  return (
    <footer className="bg-[#080813] relative overflow-hidden px-[20px] sm:px-[60px] md:px-[120px] lg:px-[240px] py-[80px] md:py-[120px] w-full" data-name="Footer">
      ${footerInnerHtml.replace(/w-\[1920px\]/g, 'w-full').replace(/paint0_radial_1_1135/g, 'footer_radial_1').replace(/paint0_radial_1_1127/g, 'footer_radial_2')}
    </footer>
  );
}`;

// Remove the old Footer and Div and replace Home
code = code.replace(
  /<div className="bg-\[#080813\] content-stretch flex flex-col gap-\[40px\] items-center mb-\[-2px\] overflow-clip px-\[240px\] py-\[120px\] relative shrink-0 w-\[1920px\]" data-name="Footer">[\s\S]*?<\/div>\s*<div className="absolute bottom-0 h-\[10766.6025390625px\] left-0 pointer-events-none top-0">\s*<Div \/>\s*<\/div>/g,
  ''
);

// We want to export Div as FigmaHeader
code = code.replace(/function Div\(\) \{/, 'export function FigmaHeader() {');

// Fix FigmaHeader CSS to be responsive and fixed
code = code.replace(/className="bg-white content-stretch flex gap-\[172.016px\] h-\[80px\] items-center justify-center pl-\[24px\] pointer-events-auto pr-\[24.016px\] sticky top-0 w-\[1920px\]"/, 'className="bg-white flex justify-between h-[80px] items-center px-[40px] pointer-events-auto sticky top-0 w-full z-50 shadow-sm"');

// Fix the Home export to not include Frame107 and have correct sizing
code = code.replace(/export default function Home\(\) \{[\s\S]*?return \([\s\S]*?<div className="bg-white content-stretch flex flex-col items-center pb-\[2px\] pt-\[80px\] relative size-full" data-name="Home">\s*<Frame107 \/>/g, 
`export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[2px] relative size-full overflow-hidden" data-name="Home">
      <Frame18 />`);

// FIX ICONS: Replace Material_Icons:Regular with Material Icons and add material-icons class
code = code.replace(/font-\['Material_Icons:Regular',sans-serif\]/g, "material-icons");

// Append FigmaFooter at the end
code += '\n' + figmaFooterContent;

fs.writeFileSync('src/components/home/ReactHome.tsx', code);
console.log('Transform script completed with improved Footer regex');
