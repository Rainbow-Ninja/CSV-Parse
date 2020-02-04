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
        // step: function(result) {
        //     console.log("-------------- ", result.data.customer_name, " --------------")
        //     console.log("****************************");
        //     console.log(result.data);
        //     console.log("****************************");
        // },
        complete:function(results){
            showData(results.data);
        }
    });
};

function showData(data) {
    console.log("SHOW DATA..... ", data);
    console.log("-------------- ", data.customer_name, " --------------")
}

parseData(file, showData);