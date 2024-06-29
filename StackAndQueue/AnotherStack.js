class AnotherStack{
    constructor(){
        this.database = {};
        this.count = 0;
    }
    // add new Value
    push(value){
        this.count++;
        this.database[this.count] = value
        return this.database;
    }
    // outtt
    pop(){
       delete this.database[this.count]
       this.count--;
       return this.count 
    }
}
let anotherStack = new AnotherStack();
console.log(anotherStack.push("Mr.OOP"));
console.log(anotherStack.push("Ms. Stack & Queue"));
console.log(anotherStack.push("Ms. Stack & LinkList"));
console.log(anotherStack.pop());
console.log(anotherStack.database);