function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right)

}


function merge(arr1, arr2) {
    let res = [];

    let arr1Index = 0
    let arr2Index = 0


    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            res.push(arr1[arr1Index])
            arr1Index++
        } else {
            res.push(arr2[arr2Index])
            arr2Index++
        }
    }
    if (arr1Index < arr1.length) {
        res = res.concat(arr1.slice(arr1Index))
    } else {
        res = res.concat(arr2.slice(arr2Index))
    }
    return res
}


let test = [1, 5, 3, 2, 4, 6, 8, 7, 9, 10]
console.log(mergeSort(test))

// Sorting Function
// 1. Check if the input is length 1 or less.
// 2. If so, it's already sorted: return.
// 3. Divide the array in half.
// 4. Recursively sort the left half.
// 5. Recursively sort the right half.
// 6. Merge the halves together and return.

// Merge Function
// 1. Create an empty return array.
// 2. Point to the first value of each array.
// 3. While there are still values in each array:
// 4. Compare the first values of each array.
// 5. Add the smaller value to the return array.
// 6. Move the pointer to the next value in that array.
// 7. Return the return array.