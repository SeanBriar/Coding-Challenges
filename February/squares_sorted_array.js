const array = [-4,-1,0,3,10]

const sortedSquares = (array)=>{
  let newArr = []
  // console.log(array);
  array.forEach((i)=>{
    let s = i * i
    // console.log(a);
    newArr.push(s)
    newArr.sort((a, b) =>  a - b)
  })

  // console.log(newArr);

}

sortedSquares(array)
