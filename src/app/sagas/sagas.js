import {takeEvery, delay} from 'redux-saga'
import {call, put, take, fork, cancelled, takeLatest, race, cancel} from 'redux-saga/effects'
import {asyncTestInitial, asyncFetchInitial, asyncFetchSuccess, asyncFetchError} from '../actions/asyncActions'
import {updateFibonacci, endFibonacci} from '../actions/forkActions'
import {updateProgress, updateWinner} from '../actions/raceActions'

export function FetchTestData() {
  return fetch('testdata.json')
    .then((res) => res.json())
    .then((json) => {
      const {result} = json.dummy
      return result
    })
}

export function* initFetch(action) {
  yield call(fetchData, action.payload)
  yield call(delay, 3000)
  yield put(asyncFetchInitial())
  try {
    const result = yield call(FetchTestData)
    yield put(asyncFetchSuccess(result))
  } catch (error) {
    console.log('Error in fetch' + error)
    yield put(asyncFetchError())
  }
}

export function* fetchData(sagaPut) {
  yield call(delay, 3000)
  yield put({type: 'ASYNC_TEST', payload: 'ASYNC__' + sagaPut})
  yield put(asyncTestInitial())
  yield put({type: 'ASYNC_INIT_DONE', payload: 'Init done'})
}


const fibonacciGenerator = function*() {
  let [prev, curr] = [0, 1]
  for (; ;) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}

export function* startFib() {
  const fab = fibonacciGenerator()
  try {
    let fabStr = ''
    for(let i =0; i < 50; i++) {
      fabStr += ` ${fab.next().value}`
      yield call(delay, 100)
      yield put(updateFibonacci(fabStr))
    }
    yield put(endFibonacci())
  } finally {
    if(yield cancelled()) {
      console.log('fibonacci cancelled')
    }
  }
}

export function* startRace() {
  let rate1 = 0
  let rate2 = 0
  const end = 800

  while(rate1 < end && rate2 < end) {
    rate1 += Math.random()*10
    rate2 += Math.random()*10
    yield call(delay, 100)
    yield put(updateProgress(rate1, rate2))
  }

  const winner = rate1 > rate2 ? 'Hare' : 'Tortoise'
  yield put(updateWinner(winner))
}

export default function* rootSaga() {
  yield takeEvery('ASYNC_TEST_SAGA', initFetch)

  yield takeLatest('START_RACE', startRace)

  while (true) {
    yield take('START_FIB')
    const task = yield fork(startFib)
    const action = yield take(['END_FIB', 'STOP_FIB'])
    if(action.type === 'STOP_FIB') {
      yield cancel(task)
    }
  }
}
