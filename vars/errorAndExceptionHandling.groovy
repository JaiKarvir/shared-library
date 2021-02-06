def call(artifactName="abc", startTime="",endTime="", dodConfigFile = './DodConfig.yaml'){

    def errorAndExceptionHandling = libraryResource 'ErrorAndExceptionalHandling.js'
       writeFile file: "ErrorAndExceptionHandling.js", text: errorAndExceptionHandling  
    sh "npm install";
    sh "npm install splunk-sdk"
    def result  = sh(returnStdout: true, script: "node ErrorAndExceptionHandling.js ${artifactName} ${startTime} ${endTime} ${dodConfigFile}").split("\r?\n")    
       println("result: " + result);

}