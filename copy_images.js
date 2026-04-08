const fs = require('fs');
const path = require('path');

const filesToCopy = [
    'C:/Users/aayus/.gemini/antigravity/brain/d316e0ad-6237-4565-8e32-7cb94aa5548d/html_3d_icon_1775637150328.png',
    'C:/Users/aayus/.gemini/antigravity/brain/d316e0ad-6237-4565-8e32-7cb94aa5548d/css_3d_icon_1775637167867.png',
    'C:/Users/aayus/.gemini/antigravity/brain/d316e0ad-6237-4565-8e32-7cb94aa5548d/tailwind_3d_icon_1775637184017.png',
    'C:/Users/aayus/.gemini/antigravity/brain/d316e0ad-6237-4565-8e32-7cb94aa5548d/wordpress_3d_icon_1775637201054.png'
];

const destFolder = 'c:/Users/aayus/Downloads/aayushdev-portfolio-main/aayushdev-portfolio-main/public/images/';

filesToCopy.forEach(filePath => {
    const fileName = path.basename(filePath);
    const destPath = path.join(destFolder, fileName);
    try {
        fs.copyFileSync(filePath, destPath);
        console.log(`Copied ${fileName} successfully.`);
    } catch (err) {
        console.error(`Error copying ${fileName}:`, err);
    }
});
