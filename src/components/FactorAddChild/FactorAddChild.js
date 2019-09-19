import React, { Component } from 'react'
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class FactorAddChild extends Component {
    state = {
        factors: '',
        weight: 0

    }

    //// Konou Note - Cannot seem to store inputs into state - Ask Scott or Myron for help ********

    handleChange = (event) => {
        const inputValue = event.target.value;
        const propertyKey = event.target.getAttribute('name');
        console.log('propertyKey', propertyKey);
        console.log('inputValue', inputValue);
        this.setState({
            
        });
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

    /////Konou Note - Tried two different handleChange method and both do not work, will come back to it

    // handleChange = (dataname) => (event, something) => {
    //     let finalValue = event;
    //     if (event.target) {
    //         finalValue = event.target.value
    //     }
    //     this.setState({
    //         factorsWeights: {
    //             ...this.state.factorsWeights,
    //             [dataname]: finalValue
    //         }
    //     });
    // }

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