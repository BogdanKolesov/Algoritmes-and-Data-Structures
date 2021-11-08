const arr = [0, 5, 2, 6, 1, 9, 23, 5, 324, 91, -2, 23, -9]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log('count = ', count)