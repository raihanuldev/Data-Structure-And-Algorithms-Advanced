class AnotherSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  //   push new Node On List
  push(value){
    let newNode = {
         value: value,
         next: null
    }
    if(this.isEmpty()){
        this.head = newNode;
        this. tail = newNode;
    }else{
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.length++
  }
}

let list = new AnotherSinglyLinkedList();
console.log(list);
list.push(100)
console.log(list) 
list.push(110)
console.log( list);
list.push(120)
console.log(list);
