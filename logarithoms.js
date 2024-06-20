function anotherLogN(n){
    while(n>1){
        console.log(n);
        n/=2
    }
    console.log("Done");
}

// anotherLogN(16)

function logFunctionN(n){
    if(n<=1){
        console.log("done");
        return
    }
    console.log(n);
    logFunctionN(n/2)
}
logFunctionN(16)