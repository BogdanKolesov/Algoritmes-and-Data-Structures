const array = [1, 2, 3, 5, 9, 7, 6, 16, 11, 8]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return item
        }
    }
    return null
}

console.log(linearSearch(array, 9))
console.log('count =', count)