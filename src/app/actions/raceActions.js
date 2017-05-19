export const startRace = () => {
  return {
    type: 'START_RACE'
  }
}

export const updateProgress = (hare, tortoise) => {
  return {
    type: 'UPDATE_RACE',
    payload: {hare, tortoise}
  }
}

export const updateWinner = (winner) => {
  return {
    type: 'UPDATE_RACE_WINNER',
    payload: {winner}
  }
}
