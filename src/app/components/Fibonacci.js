import React from 'react'

let op = true
let btnText = 'START'

const Fibonacci = ({ start, stop, fibonacci }) => {

  if(!fibonacci) {
    op = true
    btnText = 'START'
  }

  const handleForkClick = () => {
    if(op) {
      op = false
      btnText = 'END'
      start()
    } else {
      op = true
      btnText = 'START'
      stop()
    }
  }

  return (
    <div className="container">
      <hr/>
      <h3>2. TEST FORK/CANCEL/CANCELLED</h3>
      <div>
        <button id="fork" onClick={handleForkClick}>{btnText}</button>
      </div>
      <div>
        { fibonacci }
      </div>
    </div>
  )
}

export default Fibonacci