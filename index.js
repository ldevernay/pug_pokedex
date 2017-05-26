var fs = require('fs');
var pug = require('pug');

function datasource(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
var html = pug.renderFile('pokedex.pug', {datasource: datasource});
console.log(html);
