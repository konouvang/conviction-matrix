import React from 'react'

const ScoreItemChild = ({score, deleteScore}) => {

  const scoreList = score.length ? (
    score.map(score => {
      return (
        <div key={score.id}>
          <button onClick={() => {deleteScore(score.id)}}>`{score.content}`</button>
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