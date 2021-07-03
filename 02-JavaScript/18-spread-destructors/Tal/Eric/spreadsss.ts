const arr11:Array<number> = [1,2,3,4,55];
//spread inside
const arr22=[...arr11,5]
console.log(arr22)

arr11[0]=1000
console.log(arr22)

const arr33=arr11
console.log(arr33)

arr11[0]=1111
console.log(arr33)

