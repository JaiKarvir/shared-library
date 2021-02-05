def call(artifactName="abc", startTime="",endTime=""){

    def test = libraryResource 'package-lock.json'
       writeFile file: "package-lock.json", text: test
    def errorAndExceptionHandling = libraryResource 'ErrorAndExceptionalHandling.js'
       writeFile file: "ErrorAndExceptionHandling.js", text: errorAndExceptionHandling  
    sh "npm install";
    sh "npm install splunk-sdk"
    def result  = sh(returnStdout: true, script: "node ErrorAndExceptionHandling.js ${artifactName} ${startTime} ${endTime}").split("\r?\n")    
       println("result: " + apiResult);

}