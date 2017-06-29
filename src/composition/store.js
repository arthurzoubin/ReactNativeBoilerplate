import { fromJS } from 'immutable'
import { makeCreateStore } from './makeCreateStore'
import rootReducer from '../reducers'
import { middleware } from './middleware'

const initialState = fromJS({})

export const store = makeCreateStore(middleware)(
  rootReducer,
  initialState,
)
