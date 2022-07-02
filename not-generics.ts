
function addTwo(num:number)   {
  let newNum = num+2
  return newNum
}


function addTwoArray(arr:Array<number>,addTwo : Function): Array<number> {
  let newArray : number[] = [];
  arr.map( item => newArray.push(addTwo(item)))
  return newArray
}

console.log(addTwoArray([2,4,6],addTwo))
