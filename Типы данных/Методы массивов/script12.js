

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O




function unique(arr) {
    let newArr = arr.filter((el, index, arr) => arr.indexOf(el) === index)
    
    return newArr
}