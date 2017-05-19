import {takeEvery, delay} from 'redux-saga'
import {call, put, take, fork, cancel} from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/utils'

import {
  asyncTestInitial,
  asyncFetchInitial,
  asyncFetchSuccess
} from '../src/app/actions/asyncActions'
import {
  updateFibonacci
} from '../src/app/actions/forkActions'

import rootSaga, {FetchTestData, initFetch, fetchData, startFib} from '../src/app/sagas/sagas'

describe('>>>initFetch', () => {
  const action = {type: 'ASYNC_TEST', payload: 'ASYNC__TEST_SAGA'}
  const generator = initFetch(action)
  it('+++ should call fetchData', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(fetchData, action.payload))
  })
  it('+++ should call a delay 3000', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(delay, 3000))
  })
  it('+++ ASYNC_FETCH_INITIAL action', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put(asyncFetchInitial()))
  })
  it('+++ call function to fetch testData.json', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(FetchTestData))
  })
  it('+++ ASYNC_FETCH_SUCCESS action', () => {
    const dummyOutput = 'Dummy Output',
      testValue = generator.next(dummyOutput).value
    expect(testValue).toEqual(put(asyncFetchSuccess(dummyOutput)))
  })
})

describe('>>>fetchData ', () => {
  const generator = fetchData('TEST_CALL_PUT')
  it('+++ should call a delay 3000', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(delay, 3000))
  })
  it('+++ ASYNC_TEST action', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put({type: 'ASYNC_TEST', payload: 'ASYNC__TEST_CALL_PUT'}))
  })
  it('+++ ASYNC_TEST_INITIAL action', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put(asyncTestInitial()))
  })
  it('+++ ASYNC_INIT_DONE action', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put({type: 'ASYNC_INIT_DONE', payload: 'Init done'}))
  })
})


describe('>>>startFib ', () => {
  const generator = startFib()
  it('+++ should call a delay 100', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(delay, 100))
  })
  it('+++ should updateFibonacci', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put(updateFibonacci(' 1')))
  })
  it('+++ should call a delay 100', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(call(delay, 100))
  })
  it('+++ should updateFibonacci', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(put(updateFibonacci(' 1 2')))
  })
})

describe('>>>rootSaga', () => {
  const generator = rootSaga()
  it('+++ should start fibonacci', () => {
    generator.next()
    generator.next()
    const testValue = generator.next().value
    expect(testValue).toEqual(take('START_FIB'))
  })
  it('+++ should fork service', () => {
    const testValue = generator.next().value
    expect(testValue).toEqual(fork(startFib))
  })
  it('waits for stop action and then cancels the service', () => {
    const mockTask = createMockTask();
    const testValue = generator.next(mockTask).value
    expect(testValue).toEqual(take(['END_FIB', 'STOP_FIB']))
    const testNextValue = generator.next({type: 'STOP_FIB'}).value
    expect(testNextValue).toEqual(cancel(mockTask))
  });
})
