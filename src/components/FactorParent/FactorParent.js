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
        const factorsWeights = this.state.factors.filter(factor => {
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
      render() {
        return (
          <div>
          <h1>Factor</h1>
          <p>Factors are what drives us to make decisions. For example, a factor for buying a new car may be its Resale Value, Gas
              Efficiency and Average Years in Use. There needs to be a minimum of one factor for you Decision Item.
          </p>
          <FactorItemChild factorsWeights={this.state.factorsWeights} deleteFactor={this.deleteFactor} />
          <FactorAddChild addFactor={this.addFactor} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(FactorParent);