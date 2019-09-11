import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FactorItemChild from '../FactorItemChild/FactorItemChild';
import FactorAddChild from '../FactorAddChild/FactorAddChild';

class FactorParent extends Component {
    state = {
        factors: [
            {id: 1, content: 'Expensive Relocation', weight: 7},
            {id: 2, content: 'Higher paying job', weight: 9}
        ]
    }

    deleteFactor = (id) => {
        const factors = this.state.factors.filter(factor => {
            return factor.id !== id
        });
        this.setState({
            factors
        })
      }
      addFactor = (factor) => {
        factor.id = Math.random()
        let factors = [...this.state.factors, factor]
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
          <FactorItemChild factors={this.state.factors} deleteFactor={this.deleteFactor} />
          <FactorAddChild addFactor={this.addFactor} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(FactorParent);