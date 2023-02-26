const fs = require('fs')

const readStream = fs.createReadStream('./docs/index.txt');
const writeStream = fs.createWriteStream('./docs/textNEW.txt')

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
    writeStream.write('\n************\n')
})