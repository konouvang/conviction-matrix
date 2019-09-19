import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';


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

  // const factorList = this.props.redux.factorWeightReducer.length ? (
  //   this.props.redux.factorWeightReducer.map(( dummydata, index ) => {
  //     return (
  //       <div key={index}>
  //         <button onClick={() => {deleteFactor(index)}}>`{dummydata.factors} {dummydata.weight}`</button>
  //       </div>
  //     )
  //   })
  // ) : (
  //   <p>You need at least one factors to use this app</p>
  // )
  // return (
  //   <div>
  //     {factorList}
  //   </div>
  // )
}

export default connect(mapStateToProps)(FactorItemChild);