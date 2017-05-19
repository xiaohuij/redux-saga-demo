export const startFibonacci = () => {
  return {
    type: 'START_FIB'
  }
}

export const updateFibonacci = (fib) => {
  return {
    type: 'UPDATE_FIB',
    payload: fib
  }
}

export const endFibonacci = () => {
  return {
    type: 'END_FIB'
  }
}

export const stopFibonacci = () => {
  return {
    type: 'STOP_FIB'
  }
}
