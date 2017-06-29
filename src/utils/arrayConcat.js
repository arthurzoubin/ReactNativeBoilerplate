import { concat } from 'ramda'

const arrayConcat = (arrays) => {
  let arr = []
  for(let i=0; i < arrays.length; i++) {
    arr = concat(arr, arrays[i])
  }
  return arr
}

export default arrayConcat
