

export const filter = (arr, func) => {
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    if(func(arr[index], index, arr)){
      newArr.push(arr[index])
    }
  }
  return newArr
}