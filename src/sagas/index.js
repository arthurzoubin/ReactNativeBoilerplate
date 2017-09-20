// @flow

import { arrayConcat } from '../utils'
import { testPageSaga } from './testPage.saga'

let sagas: Object[] = []

sagas = arrayConcat(
  [
    sagas,
    testPageSaga,
  ]
)

export default sagas
