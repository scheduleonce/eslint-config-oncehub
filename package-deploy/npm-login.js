let fs = require('fs');
let path = require('path');

let token = '';

process.argv.forEach(function(val, index, array) {
  if (index == 2) token = val;
});

let registry = 'https://registry.npmjs.org/';

var homePath = process.env.HOME ? process.env.HOME : process.env.USERPROFILE;
var configPath = configPath ? configPath : path.join(homePath, '.npmrc');

fs.writeFile(configPath, `${registry}:_authToken=${token}` + '\n', () => {});