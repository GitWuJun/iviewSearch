let fileName = './libs/iview_components.json';
let keyWord = process.argv[2];

const getComponents = require('./libs/getComponents.js');
const readFile = require('./libs/readFile.js');

function main() {
    let dataSource = readFile(fileName);
    let resultArr = getComponents(keyWord, dataSource);
    if (resultArr.length) {
        console.log(JSON.stringify({ items: resultArr }));
    }
}

main();
