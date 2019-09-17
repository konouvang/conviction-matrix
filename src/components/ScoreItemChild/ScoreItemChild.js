import React from 'react'

const ScoreItemChild = ({scores, deleteScore}) => {

  const scoreList = scores.length ? (
    scores.map(scores => {
      return (
        <div key={scores.id}>
          <button onClick={() => {deleteScore(scores.id)}}>`{scores.content}`</button>
        </div>
      )
    })
  ) : (
    <p>Scores are from 1 to 10</p>
  )
  return (
    <div>
      {scoreList}
    </div>
  )
}

export default ScoreItemChild;