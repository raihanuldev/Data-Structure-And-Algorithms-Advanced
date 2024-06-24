function countDown(n) {
    console.log(n);
    n = n-1;
    if(n>0){
        countDown(n)
    }
}
countDown(10);
