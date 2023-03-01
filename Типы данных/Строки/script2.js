function checkSpam(str) {
    const strLow = str.toLowerCase()
    return (strLow.includes('viagra') || strLow.includes('xxx')) ? true : false
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") )