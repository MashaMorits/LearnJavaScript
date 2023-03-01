function getSecondsToTomorrow() {

    let now = new Date()
    console.log(now)
    let sec = (23 - now.getHours()) * 3600 + (59 - now.getMinutes()) * 60 + (60 - now.getSeconds())
    return sec

}

alert(getSecondsToTomorrow())