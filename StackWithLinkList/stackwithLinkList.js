class Node {
  constructor(value) {
    this.value = value;
  }
}
class BookStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    let book = new Node(value);
    if (!this.top) {
      this.top = book;
      this.bottom = book;
    } else {
      let holdingBooks = this.top;
      this.top = book;
      this.top.next = holdingBooks;
    }
    
    this.length++;
  }
}
let bookStacks = new BookStack();
bookStacks.push("Book-1");
bookStacks.push("Book-2");
bookStacks.push("Book-3");
console.log(bookStacks);
