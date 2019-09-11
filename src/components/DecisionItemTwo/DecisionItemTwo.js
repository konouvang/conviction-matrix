import React from 'react'

const DecisionItemTwo = ({decisions, deleteDecision}) => {

  const decisionList = decisions.length ? (
    decisions.map(decisions => {
      return (
        <div key={decisions.id}>
          <button onClick={() => {deleteDecision(decisions.id)}}>{decisions.content}</button>
        </div>
      )
    })
  ) : (
    <p>You need at least two decisions to use this app</p>
  )
  return (
    <div>
      {decisionList}
    </div>
  )
}

export default DecisionItemTwo;