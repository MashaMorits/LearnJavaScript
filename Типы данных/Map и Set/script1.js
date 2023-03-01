function unique(arr) {

    let set = Array.from(new Set(arr))

    return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O