// low code for this function. 
function sumOFall(n){
    let total = 0;
    for(let i = 0; i<=n; i++){
        total +=i;
        
    }
    return total
}

// Good Code 
function sumOFall(n){
    return n*(n+1)/2
}

console.log(sumOFall(5));