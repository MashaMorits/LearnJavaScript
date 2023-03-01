function getSecondsToday() {

    let now = new Date()
    let sec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
    return sec

}

alert(getSecondsToday())