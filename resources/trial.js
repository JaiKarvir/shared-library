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
  fs.readFile('/Users/jaikarvir/Desktop/Jai/kpdod-codebase/kpdod-phase/DodConfig.yaml', 'utf8' , (err, data) => {
    //fs.readFile(dod_config_file, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let errorPrefixs = yaml.load(data);
    errorQuery = errorPrefixs.map((errorPrefix)=>{
      //return "VendorID="+errorPrefix;
      return errorPrefix;
    })
    //errorQuery = errorQuery.join(' OR ');
  })

var service = new splunkjs.Service({username: "jaikarvir", password:"Flower$7"});

service.login(function(err,success){
    if(err){ß
        throw err;
    }
   console.log("login was successful"+success);
   var searchQuery =  "search sourcetype=vendor_sales AND VendorID";
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
       /* var fields = results.fields;
        var rows = results.rows;
        var splunkData = [];
        for(var i = 0; i < rows.length; i++) {
          var values = rows[i];
          var rowData = [];
          for(var j = 0; j < values.length; j++) {
            var field = fields[j];
            var value = values[j];
            var obj = {
              [field]: value
            }
            rowData.push(obj)
          }
          splunkData.push(rowData);  
        }*/
        //console.log(results.rows);
        var obj = results.rows;
        for(let i in obj){
            //console.log(obj[i].filter(o=>o.includes('5036')));
            errorQuery.forEach(function(criteria){
                  console.log(obj[i].filter(o=>o.includes(criteria)));
            });

        }
      //  var abc =obj.filter(o => o.includes('[02/Feb/2021:18:23:46] VendorID=7026 Code=C AcctID=8702194102896748'));

        //console.log(abc[0][1]);
        /*if(splunkData.length !== 0){
        let data = JSON.stringify(splunkData);
     
        fs.writeFile('splunkdump.json', data, (err) => {});
        
        }else{
          console.log("Its a fail")
        }*/

      })
    });
  }
);   
})



}

//return errorAndExceptionalHandlingCheck(artifact_info,start_time, end_time,dod_config_file)

errorAndExceptionalHandlingCheck("jai","", "","")

