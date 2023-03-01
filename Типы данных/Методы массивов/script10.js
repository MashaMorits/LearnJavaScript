arr = [1, 2, 3];


shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);



function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5)

    console.log(arr)
}