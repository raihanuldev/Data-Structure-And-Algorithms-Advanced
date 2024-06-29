
class Stack{
    constructor(){
        this.arr = [];
    }
    // push new element
    push(value){
        this.arr.push(value)
        return this.arr;
    }
    // out from arr
    pop(){
        this.arr.pop();
        return this.arr;
    }
    lookUp(){
        return this.arr[this.arr.length -1]
    }

}

let stack = new Stack()

console.log(stack.push(12));
console.log(stack.push(16));
console.log(stack.push(18));
console.log(stack.lookUp());
console.log(stack.pop());