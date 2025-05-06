// create-nojekyll.js
const fs = require('fs');
fs.writeFileSync('out/.nojekyll', '');
console.log('✅ .nojekyll создан');
