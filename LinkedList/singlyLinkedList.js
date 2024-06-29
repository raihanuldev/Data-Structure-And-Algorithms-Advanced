
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    // check if empty
    isEmpty(){
        return this.length ===0;
    }
}
let list = new SinglyLinkedList();
console.log(list.isEmpty());