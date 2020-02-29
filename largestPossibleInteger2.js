// Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. 
// For example, given [10, 7, 76, 415], you should return 77641510.
//not complete
function arrangeBiggestNumber(arr){
  const map = {}
  
  arr.forEach((element)=>{
    const firstChar = getFirstCharOfNumber(element)

    if (map[firstChar]) {
      return map[firstChar].push(element);
    }

    map[firstChar] = [element];
  })

  return Object.keys(map).reverse().reduce((total, mapKey)=>{
    const sorted = map[mapKey].sort((a, b)=> b - a);
    
    return total.concat(sorted)
  }, [])
}

function getFirstCharOfNumber(number){
  return String(number)[0]
}
