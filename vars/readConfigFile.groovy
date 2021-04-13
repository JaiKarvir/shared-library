def call(){
    println("Inside qtest based groovy file");
    def readConfig = libraryResource 'readConfig.js'
    writeFile file: "readConfig.js", text: readConfig

    sh "npm install";
    
    def result  = sh(returnStdout: true, script: "node readConfig.js").split("\r?\n") 
    println(result)
}