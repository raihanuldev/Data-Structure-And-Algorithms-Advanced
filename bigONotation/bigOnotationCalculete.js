/**
 * 
 * 
 * */ 

function min5Log (n){
    for(let i =0; i <= Math.max(5,n); i++){
        console.log(i);
    }
}

min5Log(5) //big o (n) , becuase eikhane purata n er upor defend Kortese

// lets go another function

function max5Log(n){
    for(let i=0; i<= Math.min(5,n); i++){
        console.log(i);
    }
}
max5Log(2) // big o notation hocce o(1)