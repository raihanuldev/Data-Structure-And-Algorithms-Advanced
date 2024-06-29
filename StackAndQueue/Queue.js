// Queue data structure implementation

// frist in frist out(FIFO)

class Queue{
    constructor() {
        this.age = [];
    }
    // frist in
    unshift(value){
        this.age.unshift(value)
        return this.age;
    }
    // frist OUT
    pop(){
        this.age.pop()
        return this.age
    }
    lookUp(){
        let fristIndex = this.age[0]
        return fristIndex
    }
}

let queue = new Queue()
console.log(queue);
console.log(queue.unshift(1));
console.log(queue.unshift(3));
console.log(queue.unshift(5));
console.log(queue.unshift(7));
console.log(queue.pop());