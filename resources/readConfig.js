const fs = require("fs");
const yaml = require('js-yaml');

async function readConfig(){
    console.log("Inside readConfig");
    let configFile = await getDodConfigFileDetails("./DodConfig");
    console.log(configFile);
}

function getDodConfigFileDetails(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, result) => {    
            if (err) {
                reject("Dod Config File not found");
            }
            if (result.length > 0) {
                result = yaml.load(result);
                if (result !== null) {
                    resolve(result);
                } else {
                    reject("Dod Config file is empty")
                }
            } else {
                reject("Dod Config File is empty")
            }
        })
    })
  }
  

readConfig();