class Family {
  constructor(name,year,homeTown) {
    this.familyName = name;
    this.year = year;
    this.homeTown = homeTown;
    this.nextGeneration = null;
  }
}

class FamilyStack {
  constructor() {
    this.fristFamily = null;
    this.lastFamily = null;
    this.length = 0;
  }
  push(name,year,homeTown){
    let newFamily = new Family(name,year,homeTown)
    if(!this.fristFamily){
        this.fristFamily = newFamily;
        this.lastFamily = newFamily;
        this.length++;
    }else{
        this.lastFamily.nextGeneration = newFamily;
        this.lastFamily = newFamily
        this.length++
    }
  }
}

// inextenshiave
let familyNames = new FamilyStack();

familyNames.push("Ahmed Bin Nojir","1920","Kutubdia,cox's Bazar")
familyNames.push("Ajijur Rahman Sharif","1940","Maheskhali,cox's Bazar")
familyNames.push("Golam Sharif","1980","Maheskhali,cox's Bazar")
familyNames.push("Chaber Ahmed Sharif","2000","Maheskhali,cox's Bazar")
familyNames.push("Raihan Sharif","2020","Maheskhali,cox's Bazar")
console.log(familyNames);