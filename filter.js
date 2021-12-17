// Replicating inbuilt filter method
const newFilter = (arr, callback) => {

    if(!Array.isArray(arr)) return null;

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


// Testing our newFilter method
let arr = [1, 2, 3, 4, 5];

// filtering out only odd numbers
let newArr = newFilter(arr, (ele) => {
    return ele%2;
});

// Expected Output:  [1, 3, 5 ]
console.log(newArr);