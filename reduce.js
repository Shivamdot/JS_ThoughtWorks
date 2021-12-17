// Replicating inbuilt reduce method
const newReduce = (arr, callback, initialValue = null) => {

    if(!Array.isArray(arr) || arr.length <= 0) return null;

    let previousValue;
    let startingIndex;

    if(initialValue == null) {
        previousValue = arr[0];
        startingIndex = 1;
    } else {
        previousValue = initialValue;
        startingIndex = 0;
    }

    for (let i = startingIndex; i < arr.length; i++) {
        previousValue = callback(previousValue, arr[i], i, arr);
    }

    return previousValue;
}

// Testing our newReduce method
let arr = [1, 2, 3];

let ans = newReduce(arr, (pre, curr, ind, arr) => {
    return pre+curr;
}, 1);

// Expected Output: 7
// 1 + 1 + 2 + 3 = 7
console.log(ans);