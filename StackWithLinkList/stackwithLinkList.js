class Node {
  constructor(value) {
    this.value = value;
  }
}
class BookStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
    push(value){
        let book = new Node(value);
        if(!this.top){
            this.top = book;
            this.bottom = book;
            this.length++
        }else{
            
        }
    }
}
let bookStacks = new BookStack();
bookStacks.push("Book-1")
console.log(bookStacks);