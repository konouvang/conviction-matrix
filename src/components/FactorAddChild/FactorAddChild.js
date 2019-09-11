import React, { Component } from 'react'

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

    saveInput = (event) => {
        event.preventDefault();
        this.props.addFactor(this.state)
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

export default FactorAddChild