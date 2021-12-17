// Replicating inbuilt map method
const newMap = (arr, callback) => {

    if(!Array.isArray(arr)) return null;

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
}


// Testing our newMap method
let arr = [1, 2, 3, 4, 5];

let newArr = newMap(arr, (ele, i) => {
    return ele*i;
});

// Expected Output: [ 0, 2, 6, 12, 20 ]
console.log(newArr);