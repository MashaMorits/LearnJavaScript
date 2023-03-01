function getDateAgo(date, days) {

    let newDate = new Date(date)

    newDate.setDate(date.getDate() - days)
    return newDate.getDate()

}


let date2 = new Date(2015, 0, 2);

alert(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date2, 365)); // 2, (2 Jan 2014)