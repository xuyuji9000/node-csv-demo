var fs = require('fs'),
    csv = require('fast-csv')

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', function(data) {
        console.log(data)
    })
    .on('end', function(data) {
        console.log('Read finished')
    })
