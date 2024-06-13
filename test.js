console.log("Hello world Iam Here");

const users = ["raihan","mahin","habib"]
const userAges = [12,13,34,563,564]
const professions = ["doctor","programer","eng","rickshawala"]
const user = {name: users[1],age: userAges[1], profession: professions[1] }

for (let i =0; i < users.length; i ++){
    // const element = users[i]
    // console.log(i);
    // console.log("Current Users Name: ", element);
    // console.log("Current Users Age: ", userAges[i]);
    const newUserInfo = {name: users[i],age: userAges[i], job: professions[i]}
    console.log(newUserInfo);
}



// console.log(user);