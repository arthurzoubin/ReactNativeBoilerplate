import { arrayConcat } from '../utils'
import { homePageSaga } from './homePage.saga'

let sagas = []

sagas = arrayConcat(
  [
    sagas,
    homePageSaga,
  ]
)

export default sagas
