function includes(arr, item) {
    for (i = 0; i < arr.length; i++){
         if (arr[i] === item) {
             return true
            }
    }
    return false
}

const items = [
    'Bicycle',
    'Lego',
    'Shoes',
    'Skateboard',
    'Laser gun',
    'Motorcycle'
]

console.log(includes(items, 'Lego')) 
console.log(includes(items, 'Skateboard')) 
console.log(includes(items, 'Laser sword')) 
console.log(includes(items, 'Playstation')) 

