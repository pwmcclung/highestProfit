function minMax(arr){
  let newArr= []
  let sorted = arr.sort(function (a, b) {return a-b})
  newArr.push(sorted[0]) 
  newArr.push(sorted[sorted.length - 1])
  return newArr
}
