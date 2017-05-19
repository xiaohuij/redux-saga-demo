import React from 'react'

let op = true
let btnText = 'START'

const Race = ({ start, race }) => {

  if(race.winner) {
    op = true
    btnText = 'START'
  }

  const handleRaceClick = () => {
    if(op) {
      op = false
      btnText = 'END'
      start()
    } else {
      op = true
      btnText = 'START'
    }
  }

  return (
    <div className="container">
      <hr/>
      <h3>3. TEST RACE</h3>
      <div>
        <button id="race" disabled={!op} onClick={handleRaceClick}>{btnText}</button>
      </div>
      {
        race.winner ? <h4>{race.winner} WIN</h4> :
        <div className="race">
          <div style={{width: `${race.hare}px`, height: '20px', backgroundColor: '#ff3800', textAlign: 'right' }}>HARE</div>
          <hr/>
          <div style={{width: `${race.tortoise}px`, height: '20px', backgroundColor: '#3690f4', textAlign: 'right' }}>TORTOISE</div>
        </div>
      }
    </div>
  )
}

export default Race