import { arrayConcat } from '../utils'
import { testPageSaga } from './testPage.saga'

let sagas = []

sagas = arrayConcat(
  [
    sagas,
    testPageSaga,
  ]
)

export default sagas
