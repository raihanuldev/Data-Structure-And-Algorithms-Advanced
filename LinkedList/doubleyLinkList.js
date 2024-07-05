class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublelyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
let list = new DoublelyLinkList()
console.log(list);