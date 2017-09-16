import { combineReducers } from 'redux'
import reddit from './reddit'
import counter from './counter'

const app = combineReducers({
  counter,
  reddit
})

export default app
