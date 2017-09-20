// @flow

import { concat } from 'ramda'

export const arrayConcat = (arrays: any[]) => {
  let arr = []
  for(let i=0; i < arrays.length; i++) {
    arr = concat(arr, arrays[i])
  }
  return arr
}
