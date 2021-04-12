def call(){
    println("Inside qtest based groovy file")
    def qtest_based_check = libraryResource 'Qtest_based_check.js'
       writeFile file: "Qtest_based_check.js", text: qtest_based_check  
    sh "npm install";
    sh "npm install axios"
    
    def result
    withCredentials([string(credentialsId: 'qtest-token-dod-check', variable: 'SECRET')]) { //set SECRET with the credential content
                result= sh(returnStdout: true, script: "node Qtest_based_check.js ${SECRET}").split("\r?\n")    
    }
    //def result  = sh(returnStdout: true, script: "node Qtest_based_check.js").split("\r?\n")    
    println("result: " + result);
}