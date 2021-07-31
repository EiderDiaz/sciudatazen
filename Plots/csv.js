const fs = require("fs");
const csv = require("csvtojson");
//const { Parser }= require("json2csv");

(async () =>{
    const agua= await csv().fromFile("files/Agua.csv");
    const aire= await csv().fromFile("files/Aire.csv");
    const suelo= await csv().fromFile("files/Suelo.csv");
    var coma = ':'
    var simon= agua.split(coma);
    console.log(agua);
    
})();