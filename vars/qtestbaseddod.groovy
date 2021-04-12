def call(){
    println("Inside qtest based groovy file")
    def qtest_based_check = libraryResource 'Qtest_based_check.js'
       writeFile file: "Qtest_based_check.js", text: qtest_based_check  
    def result  = sh(returnStdout: true, script: "node Qtest_based_check.js").split("\r?\n")    
    println("result: " + result);
}