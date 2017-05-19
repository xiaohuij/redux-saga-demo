const initialState = {fibonacci: ''}

const forkReducers = (state = initialState, action) => {
  console.info(action.type)
  switch (action.type) {
    case 'UPDATE_FIB':
      return {...state, fibonacci: action.payload}
    case 'END_FIB':
    case 'STOP_FIB':
      return {...state, fibonacci: ''}
    default:
      return {...state}
  }
}

export default forkReducers
