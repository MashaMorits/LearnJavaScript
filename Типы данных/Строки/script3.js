function truncate(str, maxlength) {
    return ( str.length > maxlength )
     ? str.slice( 0, 19 ) + '…'
     : str
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
alert(truncate("Всем привет!", 20))