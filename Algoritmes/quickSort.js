const arr = [0, 5, 2, 6, 1, 9, 23, 5, 324, 91, -2, 23, -9]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        count++
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}
console.log(quickSort(arr))

console.log('count = ', count)