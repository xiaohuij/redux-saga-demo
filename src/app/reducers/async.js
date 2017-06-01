const initialState = {payload: '@@REA/INIT'}

const asyncReducers = (state = initialState, action) => {
  console.info(action.type)
  switch (action.type) {
    case 'ASYNC_TEST':
    case 'ASYNC_INIT_DONE':
    case 'ASYNC_TEST_INITIAL':
    case 'ASYNC_FETCH_INITIAL':
    case 'ASYNC_FETCH_SUCCESS':
    case 'ASYNC_FETCH_ERROR':
    case 'ASYNC_TEST_SAGA':
      return {...state, payload: action.payload}
    default:
      return {...state}
  }
}

export default asyncReducers
