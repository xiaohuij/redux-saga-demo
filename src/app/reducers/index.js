import {combineReducers} from 'redux'
import asyncReducers from './async'
import forkReducers from './fork'
import raceReducers from './race'

const reducers = combineReducers({
  async: asyncReducers,
  fork: forkReducers,
  race: raceReducers
})

export default reducers
