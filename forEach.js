// Replicating inbuilt map method
const newForEach = (arr, callback) => {

    if(!Array.isArray(arr)) return null;
    
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Testing our newForEach method
let arr = [5, 6, 7];

newForEach(arr, (ele, idx) => {
    console.log(idx+1 + " element is: " + ele);
});

// Expected Output:
// 1 element is: 5
// 2 element is: 6
// 3 element is: 7