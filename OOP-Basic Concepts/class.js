
class DataStructure {
    constructor(name,topic,){
        this.name = name,
        this.topic = [topic]
    }
    insert(value){
        this.topic.push(value)
        return this.topic
    }
}

let ds =new DataStructure("Link-List","DSA Fundamentals")
console.log(ds.insert("Be a-Great Problem Solver"));
