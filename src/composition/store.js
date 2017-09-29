import { fromJS } from 'immutable'
import { makeCreateStore } from './makeCreateStore'
import rootReducer from '../reducers'
import { middleware } from './middleware'
// @flow

const initialState = fromJS({})

export const store = makeCreateStore(
  rootReducer,
  initialState,
  middleware,
)
