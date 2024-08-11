function selectionSort(arr) {


    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

debugger
let arr1 = [5, 7, 6, 1, 9, 4, 8, 2, 3, 10]
console.log(selectionSort(arr1))
// 1. Set MIN to location 0.
// 2. Search the minimum element in the list.
// 3. Swap with value at location MIN.
// 4. Increment MIN to point to next element.
// 5. Repeat until list is sorted.