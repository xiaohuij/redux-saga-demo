const initialState = {hare: 0, tortoise: 0, winner: ''}

const raceReducers = (state = initialState, action) => {
  console.info(action.type)
  switch (action.type) {
    case 'UPDATE_RACE':
    case 'UPDATE_RACE_WINNER':
      return {...initialState, ...action.payload}
    default:
      return {...state}
  }
}

export default raceReducers
