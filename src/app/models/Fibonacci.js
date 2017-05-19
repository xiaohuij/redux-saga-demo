import React from 'react'
import {connect} from 'react-redux'
import FibonacciComponent from '../components/Fibonacci'
import {startFibonacci, stopFibonacci} from '../actions/forkActions'

const mapStateToProps = (state) => {
  console.dir(state)
  return {
    fibonacci: state.fork.fibonacci
  }
}

const mapDispatchToProps = (dispatch) => ({
  start: () => {
    dispatch(startFibonacci())
  },
  stop: () => {
    dispatch(stopFibonacci())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FibonacciComponent)
