
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

    // Push new Node
     push(value){
        let newNode = {
            value: value,
            next: null
        }
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
     }
    //  unshift
    unshift(value){
        let newNode = {
            value:value,
            next: this.head
        }
        this.head = newNode;
        this.length++
        return newNode
    }
    // Pop
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null
        }

        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode;

        while(currentNode){
            if(currentNode.next == this.tail){
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--
        return lastNode;
    }
    // shift
    shift(){
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null
            this.length =0
        }
        let currentNode = this.head;
        let newCurrentNode;
        if(currentNode){
            this.head  = currentNode.next;
            this.length --
            newCurrentNode = currentNode
        }


    }
}
let list = new SinglyLinkedList();

list.push(5)
list.push(10)
list.push(15)
// list.pop()
// list.shift()
// list.shift()
list.unshift(1)
list.unshift(3)
console.log(list);
