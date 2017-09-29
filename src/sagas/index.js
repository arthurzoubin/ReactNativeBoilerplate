import { flatten } from 'ramda'
import { testPageSaga } from './testPage.saga'
// @flow

let sagas: Array[] = []

sagas = flatten([
  sagas,
  testPageSaga,
])

export default sagas
