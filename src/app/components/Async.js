import React from 'react'

let outputArray = []

const AsyncComponent = ({payload, asyncHandler}) => {

  const handleAsyncClick = () => {
    asyncHandler('SAGA__ACTION triggered by click')
  }

  outputArray.push(payload)

  return (
    <div className="container">
      <hr/>
      <h3>1. TEST CALL/PUT</h3>
      <div>
        <button id="async" onClick={handleAsyncClick}>RUN ASYNC</button>
      </div>
      <div>
        <ul>
          {outputArray.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default AsyncComponent
