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
    // pop
    pop(){
        if(!this.head) return null;
        let popedNode = this.tail;

        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev =null
        }
        this.length--;
    }
    shift(){
        if(!this.head){
            return null;
        }
        let oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null
        }
        this.length--;
    }
    // unshift
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next =this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length ++;
    }
    // showAll
    showAll(){
        let arr = [];
        let currentNode = this.head;

        while(currentNode){
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        return arr;
    }
}
let list = new DoublelyLinkList()
// list.push(10)
// list.push(11)
// list.push(12)
// list.push(13)
// // list.pop()
// list.shift()
list.unshift(12)
list.unshift(13)
list.unshift(15)
console.log(list.showAll());
console.log(list);