import React from 'react'

const FactorItemChild = ({factors, deleteFactor}) => {

  const factorList = factors.length ? (
    factors.map(factors => {
      return (
        <div key={factors.id}>
          <button onClick={() => {deleteFactor(factors.id)}}>{factors.content}</button>
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