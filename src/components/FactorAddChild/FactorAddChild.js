import React, { Component } from 'react'
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class FactorAddChild extends Component {
    state = {
        factors: '',
        weight: 0

    }

    handleChangeFactor = (event) => {
        this.setState({
            factors: event.target.value
        })
    }

    handleChangeWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_FACTOR_WEIGHT',
            payload: this.state.factorsWeights
        });
        this.props.addFactor(this.state)
        this.setState({
            factorsWeights: {
                factors: '',
                weight: ''
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new factor item:</label>
                    <input type="text" placeholder="Factor" onChange={this.handleChangeFactor} value={this.state.factors} name="factors" />
                    <input type="number" placeholder="Weight" onChange={this.handleChangeWeight} value={this.state.weight} name="weight" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FactorAddChild)