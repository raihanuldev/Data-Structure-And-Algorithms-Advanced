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
    // push
    push(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
}
let list = new DoublelyLinkList()
list.push(10)
list.push(12)
list.push(13)
console.log(list);