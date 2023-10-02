const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'src', 'tailwind.min.css');
const dest = path.resolve(__dirname, '..', 'dist', 'tailwind.min.css');

fs.copyFileSync(src, dest);
