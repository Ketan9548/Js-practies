const arr = [2,1,3,4,5,6]
const arr1 = []

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arr1.push(element)
}
arr1[1] = 231

console.log(arr)
console.log(arr1)