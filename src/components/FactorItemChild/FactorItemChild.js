import React from 'react'

const FactorItemChild = ({factorsWeights, deleteFactor}) => {

  const factorList = factorsWeights.length ? (
    factorsWeights.map(factorsWeights => {
      return (
        <div key={factorsWeights.id}>
          <button onClick={() => {deleteFactor(factorsWeights.id)}}>`{factorsWeights.factors} {factorsWeights.weight}`</button>
        </div>
      )
    })
  ) : (
    <p>You need at least one factors to use this app</p>
  )
  return (
    <div>
      {factorList}
    </div>
  )
}

export default FactorItemChild;