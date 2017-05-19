import React from 'react'
import {connect} from 'react-redux'
import RaceComponent from '../components/Race'
import {startRace} from '../actions/raceActions'

const mapStateToProps = (state) => {
  console.dir(state)
  return {
    race: state.race
  }
}

const mapDispatchToProps = (dispatch) => ({
  start: () => {
    dispatch(startRace())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RaceComponent)
