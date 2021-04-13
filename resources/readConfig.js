const fs = require("fs");
const yaml = require('js-yaml');

async function readConfig(){
    console.log("Inside readConfig");
    try{
    let configFile = await getDodConfigFileDetails("./DodConfig");
    console.log(configFile);
    }catch(error){
        console.log(error);
    }
}


function getDodConfigFileDetails(filename) {
    return new Promise((resolve, reject) => {

        try{
        const dodFileContent = fs.readFileSync(filename, 'utf-8');
        console.log(dodFileContent)
        }catch{
            reject("Dod Config File not found");
        }
        /*fs.readFile(filename, 'utf8', (err, result) => {    
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
        })*/
    })
  }

function getDodConfigFileDetails1(filename) {
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