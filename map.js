function map(arr, func) {
    const arr1 = arr.lenght

    for (i = 0; i < arr.lenght; i++) {
        secarray[i] = func(arr[i])

    }
    return arr1
}

console.log('\nTEST 1')
const numberArr = [10, 50, 100]
const newNumberArr = numberArr.map(x => 5 + x)
console.log(newNumberArr) 
console.log(numberArr)    


console.log('\nTEST 2')
const stringArr = ['Hund', 'hest', 'Bil']
const newStringArr = stringArr.map(str => str.toUpperCase())
console.log(newStringArr) 
console.log(stringArr)    


