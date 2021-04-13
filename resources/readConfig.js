const fs = require("fs");
const yaml = require('js-yaml');

async function readConfig(){
    console.log("Inside readConfig");
    try{
    let configFile = await getDodConfigFileDetails("./DodConfig.yaml");
    console.log(configFile);
    }catch(error){
        console.log(error);
    }
}


function getDodConfigFileDetails(filename) {
    return new Promise((resolve, reject) => {

        try{
        const dodFileContent = fs.readFileSync(filename, 'utf-8');
        if (dodFileContent.length > 0) {
            result = yaml.load(dodFileContent);
            if (result !== null) {
                resolve(result);
            } else {
                reject("Dod Config file is empty")
            }
        } else {
            reject("Dod Config File is empty")
        }
        }catch{
            reject("Dod Config File not found");
        }
    })
  }

function getDodConfigFileDetails1(filename) {
    return new Promise((resolve, reject) => {
        fs.readFileSync(filename, 'utf8', (err, result) => {    
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