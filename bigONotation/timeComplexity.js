// Real Example of Big O Notation


// n square big notation example 
function multiply (n){
    for(let i =0; i <=n; i++){ // n complexity
        for(let x =0; x<=n; x++){ // n complexity
            console.log(i,x);
        }
    }
}
// This function Big O(n2)
multiply(2)