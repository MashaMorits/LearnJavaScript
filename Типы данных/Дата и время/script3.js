let date1 = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date1) );       // вторник, нужно показать 2


function getLocalDay(date) {

  let day = date.getDay()

  if (day == 0) { 
    day = 7
  }

  return day
  
}

console.log(getLocalDay(date))