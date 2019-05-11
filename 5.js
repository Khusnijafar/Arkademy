// Jawaban No. 5

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function sort_array(arr) {
    let maxes = [];
    for (let i = 0; i < arr.length; i++) {
        let innerMax = findMax(arr[i]);
        maxes.push(innerMax);
    }
    return console.log(maxes);
}

let data = [['a', 'c', 'b', 'e', 'd'], ['g', 'e', 'f']];
let dataLain = [['g', 'h', 'x', 'j'], ['a', 'c', 'b', 'e', 'd'], ['q', 'w', 'a']];

sort_array(data);
sort_array(dataLain);