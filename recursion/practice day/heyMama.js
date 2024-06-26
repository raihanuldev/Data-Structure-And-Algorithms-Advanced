
function countDown(n){
    console.log(n);
    n = n+1
    if(n<100){
        countDown(n)
    }
}
countDown(10)