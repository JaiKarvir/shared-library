const splunkjs = require('splunk-sdk');
const fs = require('fs');
const yaml = require('js-yaml');
var request = require('request');

const artifact_info = `${process.argv[2]}`;
const start_time = `${process.argv[3]}`;
const  end_time = `${process.argv[4]}`;
const  dod_config_file = `${process.argv[5]}`;

function errorAndExceptionalHandlingCheck(artifact_info, start_time, end_time,dod_config_file){
  let expected_errors = [];
  let unexpected_errors = [];

  let field_In_Splunk = '';
  console.log("DodConfigFile Name: "+dod_config_file)
  //fs.readFile('/Users/jaikarvir/Desktop/Jai/kpdod-codebase/kpdod-phase/DodConfig.yaml', 'utf8' , (err, data) => {
  fs.readFile(dod_config_file, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let dod_config_details =yaml.load(data)
    unexpected_errors = dod_config_details['Unexpected_Errors'];
    expected_errors = dod_config_details['Expected_Errors'];
    field_In_Splunk = dod_config_details['Field_In_Splunk'];
  })

//var service = new splunkjs.Service({username: "jaikarvir", password:"Flower$7"});
var service = new splunkjs.Service({
  
});

service.login(function(err,success){
    if(err){
        throw err;
    }
   console.log("login was successful : "+success);
  // let unexpected_errors_Result = [];
   let expected_errors_Result = [];
   // main array = []
   //conditon if err_message exist raw data
   // indexOf check in arr expected_errors_Result array == -1 then push 
   //check the length if equals to expected array length
  /* expected_errors.forEach(o=>{
    var expected_error_Result = [];
   })*/
   //let  = [];
  // var searchQuery =  "search sourcetype=vendor_sales AND VendorID|head 3";//earliest=-240m AND latest=now
    var searchQuery =  "search app_name=qa-sj-rx-bff-kpweb-1.15.0 earliest=-24h latest=now";
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
      const unexpected_errors_pattern = new RegExp(
        `${unexpected_errors.join("|")}`,
        "gi"
      );

      const expected_errors_pattern = new RegExp(
        `${expected_errors.join("|")}`,
        "gi"
      );

      job.results({ output_mode: "json", count: 10000}, function(err, data) {
        var result = data.results;
        let unexpected_errors_list = result.filter((data) => {
          return data._raw.match(unexpected_errors_pattern);
        });
        let expected_errors_list = result.filter((data) => {
          if(data._raw.match(expected_errors_pattern)){
            let error_event = (JSON.parse(data._raw))[field_In_Splunk];
            if(expected_errors_Result.indexOf(error_event) === -1){
              expected_errors_Result.push(error_event);
            }
          }
        });
       // console.log("unexpected_errors_list: ",unexpected_errors_list);
        console.log("unexpected_errors_list: ",unexpected_errors_list.length);
        //console.log("expected_errors_list: ",expected_errors_Result);
        if(unexpected_errors_list.length !== 0){
          console.log("DODCheckFail: Unexpected errors found")
          //Insert in database the unexpectedErrorcdetails based on array objects
        }
        if(expected_errors_Result.length != expected_errors.length){
          console.log("DODCheckFail: Not all Expected errors found")
          //Insert in database the expectedErrorcdetails based on array objects
        }

        })
    });
  }
);   
})
}

//return errorAndExceptionalHandlingCheck(artifact_info,start_time, end_time,dod_config_file)

errorAndExceptionalHandlingCheck("jai","", "","/Users/jaikarvir/Desktop/Jai/kpdod-codebase/kpdod-phase/DodConfig.yaml")

