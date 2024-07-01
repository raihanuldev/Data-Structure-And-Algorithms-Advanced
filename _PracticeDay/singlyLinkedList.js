class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // check if length empty!
    isEmpty(){
        return this.length ===0;
    }
    // add New Value
    push(value){
        let newNode ={
            value : value,
            next : null
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

}
let list = new SinglyLinkedList()
console.log(list);
list.push(10)
list.push(122)
console.log(list);