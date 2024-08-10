function insertionSort(arr) {
    let divider = 1;
    while (divider < arr.length) {
        let val = arr[divider];
        let i = divider;
        while (i > 0) {
            if (arr[i - 1] < val) {
                break;
            } else {
                arr[i] = arr[i - 1]
                i--;
            }
        }
        arr[i] = val;
        divider++;
    }
    return arr;
}


let arr1 = [5, 7, 6, 1, 9, 4, 8]

console.log(insertionSort(arr1))


// 1. If it is the first element, it is already sorted; return 1.
// 2. Pick next element.
// 3. Compare with all elements in the sorted sub-list.
// 4. Shift all the elements in the sorted sub-list that is greater than the value
//   to be sorted.
// 5. Insert the value.
// 6. Repeat until list is sorted.