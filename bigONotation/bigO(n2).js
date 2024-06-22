
/*
Quadratic Time Complexity: Algorithms with O(n^2) complexity have a runtime that grows quadratically with the input size. 
This means that as the input size increases, the runtime of the algorithm increases exponentially. 
An example of O(n^2) complexity is nested loops where each loop iterates over the input.
*/ 
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