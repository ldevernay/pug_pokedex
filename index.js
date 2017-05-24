var fs = require('fs');
var pug = require('pug');

function datasource(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
console.log(datasource('pokedex.json'));
var html = pug.renderFile('pokedex.pug', {datasource: datasource});
console.log(html);
