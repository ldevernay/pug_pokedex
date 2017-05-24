const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('coat.pug');

// Render a set of data
console.log(compiledFunction());
// "<p>Timothy's Pug source code!</p>"
