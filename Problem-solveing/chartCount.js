// find charactare from string

function charCount(str) {
  // charList declere
  let charList = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if(char.match(/[a-z]/)){
        if(charList[char] >0){
            charList[char]++
        }
        else{
            charList[char] =1
        }
    }
    // console.log(charList[char]);
  }
  console.log(charList);
}

charCount("I love you Priyo Javascript. tumi ese jibon ta dhonno kore diso amr!");
