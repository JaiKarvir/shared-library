const splunkjs = require('splunk-sdk');
const fs = require('fs');
const yaml = require('js-yaml');
var request = require('request');

const artifact_info = `${process.argv[2]}`;
const start_time = `${process.argv[3]}`;
const  end_time = `${process.argv[4]}`;
const  dod_config_file = `${process.argv[5]}`;

function errorAndExceptionalHandlingCheck(artifact_info, start_time, end_time,dod_config_file){
  let errorQuery = "";
  let genericError  = ['Error','Exception'];
  console.log("DodConfigFile: "+dod_config_file)
  /*fs.readFile('/Users/jaikarvir/Desktop/Jai/kpdod-codebase/kpdod-phase/DodConfig.yaml', 'utf8' , (err, data) => {
    //fs.readFile(dod_config_file, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    errorQuery =yaml.load(data).map((errorPrefix)=>{
      return errorPrefix;
    })
  })

var service = new splunkjs.Service({username: "jaikarvir", password:"Flower$7"});

service.login(function(err,success){
    if(err){ß
        throw err;
    }
   console.log("login was successful"+success);
   var searchQuery =  "search sourcetype=vendor_sales AND VendorID|head 3";
    var searchParams = {
      exec_mode: "blocking"
    };
    
service.search(
  searchQuery,
  searchParams,
  function(err, job) {
    // Get the job from the server to display more info
    job.fetch(function(err){
      console.log("Search job ID:         " + job.sid);
      console.log("The number of results: " + job.properties().resultCount);
      // Get the results and display them
      job.results({}, function(err, results) {
        //console.log(results);
        var obj = results.rows;
        for(let i in obj){
           let genericErrorsArr = [];
            //console.log(obj[i].filter(o=>o.includes('5036')));
            errorQuery.forEach(function(criteria){
                //  console.log(obj[i].filter(o=>o.includes(criteria)));
                let dummy = obj[i].filter(o=>!o.includes(criteria));
                dummy.length>0 ? genericErrorsArr.push(dummy):'' ;
            });
            console.log(genericErrorsArr);
        }

      })
    });
  }
);   
})*/



}

return errorAndExceptionalHandlingCheck(artifact_info,start_time, end_time,dod_config_file)

//errorAndExceptionalHandlingCheck("jai","", "","")

