import {dispatch} from 'react-redux'

export const asyncTestInitial = () => {
  return {
    type: 'ASYNC_TEST_INITIAL',
    payload: 'ASYNC_TEST_INITIAL Action Creator!!'
  }
}

export const asyncTestSaga = (payload) => {
  return {
    type: 'ASYNC_TEST_SAGA',
    payload: payload
  }
}

export const asyncFetchInitial = () => {
  return {
    type: 'ASYNC_FETCH_INITIAL',
    payload: 'ASYNC_FETCH_INITIAL action triggered!!'
  }
}

export const asyncFetchSuccess = (dummyOutput) => {
  return {
    type: 'ASYNC_FETCH_SUCCESS',
    payload: 'HELLO '.concat(dummyOutput)
  }
}

export const asyncFetchError = () => {
  return {
    type: 'ASYNC_FETCH_ERROR',
    payload: 'ASYNC_FETCH_ERROR - Async fetch failed'
  }
}
