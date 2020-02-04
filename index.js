const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('sample-address.csv')
function parseData(file, callback){
    papa.parse(file, {
        worker: true, // Don't bog down the main thread if its a big file
        header: true,
        download: true,
        dynamicTyping: true,
        delimiter: "",
        complete:function(results){
            callback(results.data);
        }
    });
};

function showData(data) {
    console.log("SHOW DATA..... ", data);
    console.log("-------------- ", data[0].customer_name, " --------------")
}

parseData(file, showData);