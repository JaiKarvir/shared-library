def call(def artifactName="abc", def startTime="",def endTime="", def dodConfigFile = "./DodConfig.yaml"){

    println("Inside groovy: "+dodConfigFile);
    def errorAndExceptionHandling = libraryResource 'ErrorAndExceptionalHandling.js'
       writeFile file: "ErrorAndExceptionHandling.js", text: errorAndExceptionHandling  
    sh "npm install";
    sh "npm install splunk-sdk"
    def result  = sh(returnStdout: true, script: "node ErrorAndExceptionHandling.js ${artifactName} ${startTime} ${endTime} ${dodConfigFile}").split("\r?\n")    
       println("result: " + result);

}