def call(){
    println("Inside qtest based groovy file")
     def result  = sh(returnStdout: true, script: "node Qtest_based_check.js").split("\r?\n")    
    println("result: " + result);
}