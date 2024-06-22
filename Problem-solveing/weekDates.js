// give any date that will return Full Formate of date
// input example: day,month,year
// return "friday"
// let's start

function daysOfTheWeek (day,month,year){
    // declere date from Date()
    let date = new Date(year,month-1,day)
    // get day of the week as a number 0-6
    let dayOfWeek = date.getDay()
    // now map on this day 
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return(days[dayOfWeek]);
}

// daysOfTheWeek(31,8,2019)
console.log(daysOfTheWeek(31,8,2019));