import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FactorItemChild from '../FactorItemChild/FactorItemChild';
import FactorAddChild from '../FactorAddChild/FactorAddChild';

class FactorParent extends Component {
    state = {
        factorsWeights: [
            {id: 1, factors: 'Expensive Relocation', weight: 7},
            {id: 2, factors: 'Higher paying job', weight: 9}
        ]
    }

    deleteFactor = (id) => {
        const factorsWeights = this.state.factorsWeights.filter(factor => {
            return factor.id !== id
        });
        this.setState({
            factorsWeights
        })
      }
    addFactor = (factor) => {
      factor.id = Math.random()
      let factors = [...this.state.factorsWeights, factor]
      this.setState({
        factors
      })
    }

    goToInfo = (event) => {
      this.props.history.push('/factor');
    }
      render() {
        return (
          <div>
            <div>
              <h1>Factor and Weight</h1>
              <p>Factors are what drives us to make decisions. For example, a factor for buying a new car may be its Resale Value, Gas
                  Efficiency and Average Years in Use. There needs to be a minimum of one factor for you Decision Item.
              </p>
              <br></br>
              <p>A weighting factor is a weight given to a data point to assign it a lighter, or heavier importance in a group.
                  Which factors are most important to you? Rate them between 1 and 10.</p>
              <FactorItemChild factorsWeights={this.state.factorsWeights} deleteFactor={this.deleteFactor} />
              <FactorAddChild addFactor={this.addFactor} />
            </div>
            <button onClick={this.goToInfo}>next</button>
          </div>
        )
      }
};

export default connect(mapStateToProps)(FactorParent);