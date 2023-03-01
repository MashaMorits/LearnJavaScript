function aclean(arr) {

    let map = new Map()

    arr.forEach(el => {
        let word = el.toLowerCase().split('').sort().join('')
        map.set(word, el)
    });

    console.log(map)

    return Array.from(map.values())
}



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"