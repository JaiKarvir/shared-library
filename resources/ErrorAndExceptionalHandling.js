const splunkjs = require('splunk-sdk');
const fs = require('fs');
const yaml = require('js-yaml');

const artifact_info = `${process.argv[2]}`;
const start_time = `${process.argv[3]}`;
const  end_time = `${process.argv[4]}`;
const  dod_config_file = `${process.argv[5]}`;

function errorAndExceptionalHandlingCheck(artifact_info, start_time, end_time,dod_config_file){

  //const  abc = `${process.argv[5]}`;
  //console.log("DODConfig : "+dod_config_file);
  //fs.readFile('/Users/jaikarvir/Desktop/Jai/kpdod-codebase/kpdod-phase/DodConfig.yaml', 'utf8' , (err, data) => {
    fs.readFile(dod_config_file, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let errorPrefixs = yaml.loadAll(data);
    console.log(errorPrefixs)
  })

   /* var service = new splunkjs.Service({username: "jaikarvir", password:"Flower$7"});

service.login(function(err,success){
    if(err){
        throw err;
    }
    console.log("login was successful"+success);

   // var searchQuery = "search * | head 100";
   var searchQuery =  "search source=tutorialdata.zip:* host=vendor_sales VendorID=1132 | head 2";
    //var searchQuery = "search categoryId=ARCADE|head 3";

    // Set the search parameters
    var searchParams = {
      exec_mode: "blocking"
    };
    

console.log("Wait for the search to finish...");

// Run a blocking search and get back a job
service.search(
  searchQuery,
  searchParams,
  function(err, job) {

    // Get the job from the server to display more info
    job.fetch(function(err){
      // Display properties of the job
      console.log("Search job properties\n---------------------");
      console.log("Search job ID:         " + job.sid);
      console.log("The number of events:  " + job.properties().eventCount); 
      console.log("The number of results: " + job.properties().resultCount);
      console.log("Search duration:       " + job.properties().runDuration + " seconds");
      console.log("This job expires in:   " + job.properties().ttl + " seconds");

      // Get the results and display them
      job.results({}, function(err, results) {
        console.log(results)
      })

    });
    
  }
);

return "check";
      
})*/

}

return errorAndExceptionalHandlingCheck(artifact_info,start_time, end_time,dod_config_file)

//errorAndExceptionalHandlingCheck("jai","", "","")

