import React from 'react'
import {connect} from 'react-redux'
import AsyncComponent from '../components/Async'
import {asyncTestSaga} from '../actions/asyncActions'

const mapStateToProps = (state) => {
  console.dir(state)
  return {
    payload: state.async.payload
  }
}

const mapDispatchToProps = (dispatch) => ({
  asyncHandler: (words) => {
    dispatch(asyncTestSaga(words))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
