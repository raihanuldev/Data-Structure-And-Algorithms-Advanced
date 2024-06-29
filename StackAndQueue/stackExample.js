class Stack{
    constructor(){
        this.biscut = [];
    }
    // add New Biscuit on pack
    add(value){
        this.biscut.push(value);
        return this.biscut;
    }
    // out from pack
    out(){
        this.biscut.pop();
        return this.biscut;
    }
}
let stackPractice = new Stack()
console.log(stackPractice.add(1));
console.log(stackPractice.add(2));
console.log(stackPractice.add(3));
console.log(stackPractice.add(4));
console.log(stackPractice.out());