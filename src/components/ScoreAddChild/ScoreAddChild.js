import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class FactorAddChild extends Component {
    state = {
        factorsWeights: {
            factors: '',
            weight: ''
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        const propertyKey = event.target.getAttribute('name');
        this.setState({
            factorsWeights: {
                ...this.state.factorsWeights,
                [propertyKey]: inputValue,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_FACTOR_WEIGHT',
            payload: this.state.gentInfo
        });
        this.props.addScore(this.state)
        this.setState({
            factors: '',
            weight: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new factor item:</label>
                    <input type="text" placeholder="Factor" onChange={this.handleChange} value={this.state.factors} name="factors" />
                    <input type="number" placeholder="Weight" onChange={this.handleChange} value={this.state.weight} name="weight" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FactorAddChild);