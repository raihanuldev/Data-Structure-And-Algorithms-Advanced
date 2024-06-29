
class DataStructure {
    constructor(name,topic,){
        this.name = name,
        this.topic = [topic,"Be a-Great Problem Solver","Be a Koti-Pothiiii"]
    }
    insert(value){
        this.topic.push(value)
        return this.topic
    }
    fristInsert(value){
        this.topic.unshift(value)
        return this.topic
    }
}

let ds =new DataStructure("Link-List","DSA Fundamentals")
console.log(ds.fristInsert("Have Some Russians"));
console.log(ds.fristInsert("have alot of Tekaaa"));


