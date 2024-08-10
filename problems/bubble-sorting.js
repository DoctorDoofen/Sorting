const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            bubbleSort(arr)
        }
    }
    return arr
}

let arr1 = [5, 7, 6, 1, 9, 4, 8, 2, 3, 10]
console.log(bubbleSort(arr1))

// 1. If the current value is greater than its neighbor to the right
// 2. Swap those values
// 3. If you get to the end of the array and no swaps have occurred, return
// 4. Otherwise, repeat from the beginning