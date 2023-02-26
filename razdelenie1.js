const fs = require('fs')

const readStream = fs.createReadStream('./docs/index.txt');
const writeStream = fs.createWriteStream('./docs/textNEW1.txt')
let a = 1;
readStream.on('data', (chunk) => {
    writeStream.write(`\nчасть ${a}\n`)
    writeStream.write(chunk)
    a++
})