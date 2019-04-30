let fs = require('fs');

function readFile(fileName){
    let data = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(data);
}

module.exports = readFile;